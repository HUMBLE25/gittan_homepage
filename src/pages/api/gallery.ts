// import { NextResponse, NextRequest } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise';
import multiparty from 'multiparty'
import { put } from "@vercel/blob";
import fs from 'fs/promises';

export const config = {
    api: {
      bodyParser: false
    }
  }

type ResponseData = {
    message: string
  }


  interface FormParseResult {
    fields: {
      title: string;
      author: string;
      content: string;
    };
    files: {
        file:File[];
    }
  }

interface File {
    fieldName: string;
    originalFilename: string;
    path: string;
    headers: { [key: string]: string };
    size: number;
  }

export default async function POST( 
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
    ) {
    try {
        const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
        const connection = await mysql.createConnection({
            host: DB_HOST,
            port: parseInt(DB_PORT),
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        });

        if (req.method === 'POST') {
            // POST 
            console.log('POST 요청 처리');
            console.log("파일 업로드 실험");
            let form = new multiparty.Form();
            let formResp:FormParseResult = await new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        console.error('Form 파싱 에러:', err);
                        reject(err);
                        return;
                    }
                    resolve({ fields, files});
                });
            });
            const {fields, files} = formResp;
            const file = files.file[0];

            const fileData = await fs.readFile(file.path);
            const filePath =  'img/'+ file.originalFilename;
            const { url } = await put(filePath,fileData,{ access: 'public' });

            const {title, author, content} = fields;
                // //save data to DB
            const [rows, dataFields] = await connection.execute(
                "INSERT INTO gallery (title, content, name, imageUrl) VALUES (?, ?, ?, ?)",
                [title[0], content[0], author[0], url]
            );
            // console.log(rows)
            if(rows) return res.json({message : "성공적으로 등록하였습니다."})

        } else {
            //GET
            const [rows, fields] = await connection.execute(
                "SELECT * FROM gallery ORDER BY creationTime DESC LIMIT 9 OFFSET 0"
            );
            console.log(rows);
            // return res.json({data:rows})
        }
    }  catch (error ) {
        console.error('An error occurred:', error);
        // return NextResponse.json({ message: 'Internal Server Error', error: error });
    }
}

      