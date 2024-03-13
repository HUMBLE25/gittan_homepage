import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // POST 요청 처리
        const { title, author, content, file } = req.body;
        console.log("==== hi i'm post ====")
        console.log(req.body)
        // Base64 데이터에서 실제 파일 데이터를 추출합니다.
        const base64Data = file.replace(/^data:([A-Za-z-+/]+);bas e64,/, '');
        fs.writeFileSync(path.join(__dirname, `${title}.jpg`), base64Data, 'base64');

        console.log(title, author, content); // 폼 데이터 접근
        res.status(200).json({ message: 'Success' });
    } else {
        // GET 요청 처리
        console.log("hi i'm get")
        res.status(200).json({ data: 'Gallery data' });
    }
}