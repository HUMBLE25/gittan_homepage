import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // POST 요청 처리
        console.log("hi")
        res.status(200).json({ message: 'Success' });
    } else {
        // GET 요청 처리
        console.log("hi i'm get")
        res.status(200).json({ data: 'Gallery data' });
    }
}