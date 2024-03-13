import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log("==================================")
        console.log('DB_HOST:', process.env.DB_HOST);
        console.log('DB_USER:', process.env.DB_USER);
        console.log('DB_PORT:', process.env.DB_PORT);
        console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
        console.log('DB_NAME:', process.env.DB_NAME);
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        await connection.ping();
        console.log('Successfully connected to the database');
        if (req.method === 'POST') {
            // POST 요청 처리
            console.log("hi i'm post");
            if (!req.body) {
                throw new Error('Request body is missing');
            }

            const { title, author, content, file } = req.body;
            
            const matches = file.match(/^data:([A-Za-z-+/]+);base64,(.+)/);
            if (!matches) {
                throw new Error('File is not in Base64 format');
            }

            const mimeType = matches[1];
            const base64Data = matches[2];

            let extension;
            if (mimeType === 'image/jpeg') {
                extension = '.jpg';
            } else if (mimeType === 'image/png') {
                extension = '.png';
            } else {
                throw new Error(`Unsupported MIME type: ${mimeType}`);
            }

            const date = new Date();
            const timestamp = date.toISOString().replace(/[-:.]/g, '');

            const dirPath = path.join(process.cwd(), 'public', 'img');
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            const imagePath = path.join(dirPath, `${title}-${timestamp}${extension}`);
            console.log("imagePath : ",imagePath);
            fs.writeFileSync(imagePath, base64Data, 'base64');

            if (fs.existsSync(imagePath)) {
                // console.log('The file has been saved successfully');
                res.status(200).json({ message: 'Save Success' });
                const [rows, fields] = await connection.execute(
                    "INSERT INTO gallery (title, content, name, imageUrl) VALUES (?, ?, ?, ?)",
                    [title, content, author, imagePath]
                );
            } else {
                // console.log('The file could not be saved');
                res.status(500).json({ message: 'Save failure' });
            }
            console.log(title, author, content,imagePath); 
            
            
        } else {
            // GET 요청 처리
            console.log("hi i'm get")
            const [rows, fields] = await connection.execute(
                "SELECT * FROM gallery ORDER BY creationTime DESC"
            );
            res.status(200).json({ data: rows });
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}