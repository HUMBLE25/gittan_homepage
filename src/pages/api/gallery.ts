import type { NextApiRequest, NextApiResponse } from 'next';
import mysql, { ResultSetHeader } from 'mysql2/promise';
import multiparty from 'multiparty';
import { put } from '@vercel/blob';
import fs from 'fs/promises';
import { z } from 'zod';

// One-line summary: Securely manages gallery CRUD with validated multipart upload and safe DB access.
export const config = {
  api: {
    bodyParser: false,
  },
};

type Row = {
  id: number;
  title: string;
  content: string;
  name: string;
  imageUrl: string;
  creationTime: Date;
};

type ResponseData = {
  message?: string;
  data?: Row[];
};

const payloadSchema = z.object({
  title: z.string().min(1).max(150),
  author: z.string().min(1).max(80),
  content: z.string().max(2000),
});

const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

function requireAdminIfConfigured(req: NextApiRequest, res: NextApiResponse<ResponseData>): boolean {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) {
    return true;
  }

  const provided = req.headers['x-admin-key'];
  if (provided !== expected) {
    res.status(401).json({ message: 'Unauthorized' });
    return false;
  }

  return true;
}

type ParsedFields = Record<string, string[]>;

type ParsedFiles = Record<string, multiparty.File[]>;

async function parseMultipart(req: NextApiRequest): Promise<{ fields: ParsedFields; files: ParsedFiles }> {
  const form = new multiparty.Form({ maxFilesSize: MAX_FILE_SIZE_BYTES });
  return await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>): Promise<void> {
  if (!['GET', 'POST', 'DELETE'].includes(req.method || '')) {
    res.setHeader('Allow', 'GET, POST, DELETE');
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  let connection: mysql.Connection | null = null;

  try {
    const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, BLOB_READ_WRITE_TOKEN } = process.env;

    if (!DB_HOST || !DB_PORT || !DB_USER || !DB_NAME) {
      res.status(500).json({ message: 'Database configuration is missing.' });
      return;
    }

    connection = await mysql.createConnection({
      host: DB_HOST,
      port: Number.parseInt(DB_PORT, 10),
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });

    if (req.method === 'GET') {
      const [rows] = await connection.execute('SELECT * FROM gallery ORDER BY creationTime DESC LIMIT 9 OFFSET 0');
      res.status(200).json({ data: rows as Row[] });
      return;
    }

    if (!requireAdminIfConfigured(req, res)) {
      return;
    }

    if (req.method === 'POST') {
      if (!BLOB_READ_WRITE_TOKEN) {
        res.status(500).json({ message: 'Blob token is missing.' });
        return;
      }

      const { fields, files } = await parseMultipart(req);
      const parsedPayload = payloadSchema.safeParse({
        title: fields.title?.[0] || '',
        author: fields.author?.[0] || '',
        content: fields.content?.[0] || '',
      });

      if (!parsedPayload.success) {
        res.status(400).json({ message: 'Invalid form payload.' });
        return;
      }

      const uploadedFile = files.file?.[0] as multiparty.File | undefined;
      if (!uploadedFile || !uploadedFile.originalFilename) {
        res.status(400).json({ message: 'Image file is required.' });
        return;
      }

      if (!ALLOWED_MIME.has(uploadedFile.headers['content-type'] || '')) {
        res.status(400).json({ message: 'Unsupported file type.' });
        return;
      }

      if (uploadedFile.size > MAX_FILE_SIZE_BYTES) {
        res.status(400).json({ message: 'File is too large.' });
        return;
      }

      const safeName = sanitizeFileName(uploadedFile.originalFilename);
      const fileData = await fs.readFile(uploadedFile.path);
      const filePath = `img/${Date.now()}_${safeName}`;

      const { url } = await put(filePath, fileData, {
        access: 'public',
        token: BLOB_READ_WRITE_TOKEN,
      });

      const { title, author, content } = parsedPayload.data;
      await connection.execute('INSERT INTO gallery (title, content, name, imageUrl) VALUES (?, ?, ?, ?)', [
        title,
        content,
        author,
        url,
      ]);

      res.status(200).json({ message: '?깅줉???꾨즺?섏뿀?듬땲??' });
      return;
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      const numericId = Number.parseInt(Array.isArray(id) ? id[0] : `${id || ''}`, 10);

      if (!Number.isInteger(numericId) || numericId <= 0) {
        res.status(400).json({ message: 'Invalid ID' });
        return;
      }

      const [rows] = await connection.execute<ResultSetHeader>('DELETE FROM gallery WHERE id = ?', [numericId]);

      if (rows.affectedRows > 0) {
        res.status(200).json({ message: 'Item deleted successfully.' });
      } else {
        res.status(404).json({ message: 'Item not found.' });
      }
      return;
    }

    const clientIp = getClientIp(req);
    console.warn('Unexpected API flow reached from IP:', clientIp);
    res.status(400).json({ message: 'Bad Request' });
  } catch (error) {
    console.error('Gallery API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

