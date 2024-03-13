import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';

// 명시적으로 타입을 정의합니다.
interface ExtendedNextApiRequest extends NextApiRequest {
    files: Express.Multer.File[];
}

const upload = multer({ storage: multer.memoryStorage() });

const apiRoute = nextConnect<ExtendedNextApiRequest, NextApiResponse>({
    onError(error: Error, req: ExtendedNextApiRequest, res: NextApiResponse) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req: ExtendedNextApiRequest, res: NextApiResponse) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.array('files'));

apiRoute.post((req: ExtendedNextApiRequest, res: NextApiResponse) => {
    console.log(req.body); // 폼 데이터 접근
    console.log(req.files); // 파일 접근
    res.status(200).json({ message: 'Success' });
});

export default apiRoute;
