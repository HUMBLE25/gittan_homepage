// import { NextApiRequest, NextApiResponse } from 'next';
import { Request, Response } from 'express';
import multer from 'multer';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import {promises as fs} from 'fs';

dotenv.config();

export const config = {
    api: {
      bodyParser: false
    }
  }

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public'); // 이미지를 저장할 폴더
    },
    filename: function(req, file, cb) {
      // 파일 이름 설정 및 확장자 추가
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
    }
  });

const upload = multer({ storage: storage });
//
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
            // POST 
            console.log('POST 요청 처리')
            upload.single('file')(req, res, async (err: any) => {
                if (err) {
                    console.log(req.body);
                    console.log(req.file);
                    console.error('Error uploading file:', err);
                    return res.status(500).json({ message: 'Error uploading file', error: err });
                }
                const { title, author, content } = req.body;
                const file = req.file;
                console.log(file);
                //save data to DB
                const [rows, fields] = await connection.execute(
                    "INSERT INTO gallery (title, content, name, imageUrl) VALUES (?, ?, ?, ?)",
                    [title, content, author, file.path]
                );
                // Process data and file as needed
                return res.status(200).json({ message: '등록에 성공하였습니다!' });
            });
        } else {
            //GET
            const [rows, fields] = await connection.execute(
                "SELECT * FROM gallery ORDER BY creationTime DESC LIMIT 9 OFFSET 0"
            );
            console.log(rows);
            return res.status(200).json({data:rows})
        }
    }  catch (error ) {
        console.error('An error occurred:', error);
        // return NextResponse.json({ message: 'Internal Server Error', error: error });
    }
}