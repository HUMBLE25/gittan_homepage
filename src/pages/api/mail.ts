// import { NextResponse, NextRequest } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');

interface TemplateParams {
    name: string;
    email: string;
    phoneNumber: string;
    hopeDate: string;
    subject: string;
    message: string;
  }

export function getTemplate({ name, email, phoneNumber, hopeDate,subject,message }:TemplateParams) {
    const mytemplate = `
          <html>
              <body>
                  <h1>업체명 : ${name}</h1>
                  <hr />
                  <div>연락처: ${email}</div>
                  <div>연락처: ${phoneNumber}</div>
                  <div>희망공사일: ${hopeDate}</div>
                  <div>공사내용: ${subject}</div>
                  <div>추가내용: ${message}</div>
              </body>
          </html>
      `;
    return mytemplate;
  }
  
export default async function POST( 
    req: NextApiRequest,
    res: NextApiResponse
    ) {
        const { EMAIL_USER, EMAIL_PASS, EMAIL_SENDER} = process.env;
  
    try {
        if (req.method === 'POST') {
            const {  name, email, phoneNumber, hopeDate, subject,message} = req.body;
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: EMAIL_USER,
                    pass: EMAIL_PASS,
                }
            })
            const template = getTemplate({name, email, phoneNumber, hopeDate, subject,message})
            const result = await transporter.sendMail({
                from: EMAIL_SENDER,
                to: "gittan@naver.com",
                subject: `${name}공사견적문의`,
                html: template
            })
            if(result.accepted){
                return res.json({message : "메일전송에 성공하였습니다."})
            }
        } 
    }catch (error) {
        console.error('Delete operation failed:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}