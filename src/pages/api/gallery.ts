// import { NextApiRequest, NextApiResponse } from 'next';
import { Request, Response } from 'express';
import multer from 'multer';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export const config = {
    api: {
      bodyParser: false
    }
  }

const upload = multer({ dest: 'uploads/' });

export default async function handler(req: Request, res: Response) {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        const ping = await connection.ping();

        if (req.method === 'POST') {
            // POST 요청 처리
            console.log('POST 요청 처리')
            
            //아래에서 에러 발생중
            upload.single('file')(req, res, async (err: any) => {
                if (err) {
                    console.error('Error uploading file:', err);
                    return res.status(500).json({ message: 'Error uploading file', error: err });
                }

                const { title, author, content } = req.body;
                const file = req.file; // Uploaded file

                // Handle file and form data here
                console.log('File:', file);
                console.log('Title:', title);
                console.log('Author:', author);
                console.log('Content:', content);

                // Process data and file as needed
                return res.status(200).json({ message: 'File uploaded successfully' });
            });
            // const date = new Date();
            // const timestamp = date.toISOString().replace(/[-:.]/g, '');

            // const [rows, fields] = await connection.execute(
            //     "INSERT INTO gallery (title, content, name, imageUrl) VALUES (?, ?, ?, ?)",
            //     [title, content, author, imagePath]
            // );
        } else {
            // GET 요청 처리
            const [rows, fields] = await connection.execute(
                "SELECT * FROM gallery ORDER BY creationTime DESC LIMIT 9 OFFSET 0"
            );
            console.log(rows);
            // return NextResponse.json({ data: rows });
        }
    }  catch (error ) {
        console.error('An error occurred:', error);
        // return NextResponse.json({ message: 'Internal Server Error', error: error });
    }
}