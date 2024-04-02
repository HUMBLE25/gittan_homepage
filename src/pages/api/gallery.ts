// import { NextResponse, NextRequest } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import multiparty from 'multiparty'
import { put } from "@vercel/blob";
import fs from 'fs/promises';

export const config = {
    api: {
      bodyParser: false
    }
  }

  interface Row {
    id: number;
    title: string;
    content: string;
    name: string;
    imageUrl: string;
    creationTime: Date;
  }

interface ResponseData  {
    message?: string;
    data?: Row[];
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

export default async function handler( 
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
    ) {
    try {
        const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME,BLOB_READ_WRITE_TOKEN } = process.env;
        const connection = await mysql.createConnection({
            host: DB_HOST,
            port: parseInt(DB_PORT),
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        });

        if (req.method === 'POST') {
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
            const { url } = await put(filePath,fileData,{ 
                access: 'public',
                token : BLOB_READ_WRITE_TOKEN
            });

            const {title, author, content} = fields;
            const [rows, dataFields] = await connection.execute(
                "INSERT INTO gallery (title, content, name, imageUrl) VALUES (?, ?, ?, ?)",
                [title[0], content[0], author[0], url]
            );
            if(rows) return res.json({message : "성공적으로 등록하였습니다."})

        } else if(req.method === 'GET') {
            //GET
            const [rows] = await connection.execute(
                "SELECT * FROM gallery ORDER BY creationTime DESC LIMIT 9 OFFSET 0"
              );
              const typedRows = rows as Row[];
              return res.json({ data: typedRows });
        }
        else if(req.method === 'DELETE'){
          const { id } = req.query;

          if (!id || Array.isArray(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
          }

          try {
            const [rows] = await connection.execute<ResultSetHeader>(
              "DELETE FROM gallery WHERE id = ?", // SQL 쿼리에서 ?를 플레이스홀더로 사용합니다.
              [id] // 두 번째 인자로 id 값을 전달합니다.
            );
        
            if (rows.affectedRows > 0) {
              // 삭제가 성공적으로 이루어진 경우
              res.json({ message: "Item deleted successfully." });
            } else {
              // 해당 ID를 가진 항목이 없는 경우
              res.status(404).json({ message: "Item not found." });
            }
          } catch (error) {
            console.error('Delete operation failed:', error);
            res.status(500).json({ message: 'Internal Server Error' });
          }

        }
    }  catch (error ) {
        console.error('An error occurred:', error);
        return res.status(500).json({ message: 'Internal Server Error'});
    }
}

      