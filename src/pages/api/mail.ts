import type { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');
import { z } from 'zod';

// One-line summary: Securely handles inquiry mail requests with validation, sanitization, and basic rate limiting.
type MailResponse = { message: string };

const mailSchema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email().max(120),
  phoneNumber: z.string().min(7).max(30),
  hopeDate: z.string().max(120).optional().default(''),
  subject: z.string().min(1).max(180),
  message: z.string().max(2000).optional().default(''),
});

type RateBucket = { count: number; resetAt: number };
const rateMap = new Map<string, RateBucket>();
const RATE_LIMIT_COUNT = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const current = rateMap.get(key);

  if (!current || now > current.resetAt) {
    rateMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateMap.set(key, current);
  return current.count > RATE_LIMIT_COUNT;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeHeaderValue(input: string): string {
  return input.replace(/[\r\n]/g, '').trim();
}

function getTemplate(payload: z.infer<typeof mailSchema>): string {
  const safe = {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    phoneNumber: escapeHtml(payload.phoneNumber),
    hopeDate: escapeHtml(payload.hopeDate),
    subject: escapeHtml(payload.subject),
    message: escapeHtml(payload.message),
  };

  return `
    <html>
      <body>
        <h1>?낆껜紐? ${safe.name}</h1>
        <hr />
        <div>?대찓?? ${safe.email}</div>
        <div>?곕씫泥? ${safe.phoneNumber}</div>
        <div>?щ쭩怨듭궗?쇱떆: ${safe.hopeDate}</div>
        <div>怨듭궗?댁슜: ${safe.subject}</div>
        <div>異붽??댁슜: ${safe.message}</div>
      </body>
    </html>
  `;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<MailResponse>): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    res.status(429).json({ message: 'Too many requests. Please try again later.' });
    return;
  }

  const parsed = mailSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Invalid request payload.' });
    return;
  }

  const { EMAIL_USER, EMAIL_PASS, EMAIL_SENDER, EMAIL_RECEIVER } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_SENDER) {
    res.status(500).json({ message: 'Mail configuration is missing.' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const subjectName = sanitizeHeaderValue(parsed.data.name);
    const html = getTemplate(parsed.data);

    await transporter.sendMail({
      from: EMAIL_SENDER,
      to: EMAIL_RECEIVER || 'gittan@naver.com',
      subject: `${subjectName} 怨듭궗寃ъ쟻臾몄쓽`,
      html,
    });

    res.status(200).json({ message: '硫붿씪 ?꾩넚???꾨즺?섏뿀?듬땲??' });
  } catch (error) {
    console.error('Mail send failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

