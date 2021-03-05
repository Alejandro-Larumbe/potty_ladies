import Router from 'express-promise-router'
import express, { application } from 'express';
import { PrismaClient } from '@prisma/client';
import AWS from "aws-sdk"
import multer from "multer"
import multerS3 = require('multer-s3');
const prisma = new PrismaClient()
const router = Router()
// AWS.config.update({
//     secretAccessKey: process.env.ACCESS_KEY_ID.secretAccessKey,
//     accessKeyId: process.env.SECRET_ACCESS_KEY.accessKeyId,
//     region: process.env.REGION.region,
//   });

// const uploadMiddleware = multer({
//     fileFilter: (req: express.Request, file:any, cb:any) => {
//         if (!file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)) {
//             return cb(new Error('Only image files are allowed!'), false);
//         }
//         cb(null, true);
//     },
//     storage: multerS3({
//       s3: new AWS.S3({
//     secretAccessKey: process.env.S3_KEY,
//     accessKeyId: process.env.S3_SECRET,
//     region: process.env.S3_REGION
//       }),
//       bucket: "pottyladies",
//       contentType: multerS3.AUTO_CONTENT_TYPE,
//       acl: "public-read",
//       key: (req: express.Request, file:any, cb:any): any => {
//         // save file to Spaces, you can use / to add folders directory
//         const fileName = Date.now().toString(); //file.originalname;
//         cb(null, `test/${fileName}`);
//       }
//     })
//   }).array("upload", 1);




//   const uploadMiddleware = multer({
//     fileFilter: (req: express.Request, file:any, cb:any) => {
//         if (!file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)) {
//             return cb(new Error('Only image files are allowed!'), false);
//         }
//         cb(null, true);
//     },
//     storage: multerS3({
//         acl: 'public-read',
//        s3: new AWS.S3({
//     secretAccessKey: process.env.S3_KEY,
//     accessKeyId: process.env.S3_SECRET,
//     region: process.env.S3_REGION
//       }),
//         bucket: "pottyladies",
//         // cacheControl: 'max-age=31536000',
//         metadata: (req: express.Request, file:any, cb:any) => {
//           cb(null, {fieldName: file.fieldname});
//         },
//         key: (req: express.Request, file:any, cb:any) => {
//           cb(null, `${Date.now().toString()}.jpg`)
//         }
//       })
// }).single('file');


// router.post("/images", uploadMiddleware, async(req:any, res:express.Response)=>{
//     const file = req.files[0];

// })

AWS.config.update({
    secretAccessKey: process.env.S3_KEY,
    accessKeyId: process.env.S3_SECRET,
    region: process.env.S3_REGION
})
const upload = multer();
const s3 = new AWS.S3();
const fileFilter = (req: any, res: express.Response, next: express.NextFunction) => {
    const file = req.files[0];
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        next();
    } else {
        next({ status: 422, errors: ["Invalid Mime Type, only JPEG and PNG"] });
    }
};

router.post("/images", upload.any(), fileFilter, async (req: any, res: express.Response, next: express.NextFunction) => {
    const {plantId, sequence} = req.body;
    const file = req.files[0];
    const params = {
        Bucket: "pottyladies",// put in .env file.
        Key: Date.now().toString() + file.originalname,
        Body: file.buffer,
        ACL: "public-read",
        ContentType: file.mimetype,
    };
    const promise = s3.upload(params).promise();
    const uploadedImage = await promise;
    const url = uploadedImage.Location
    const image = await prisma.image.create({
        data:{
            plantId,
            sequence,
            url,
        }
    })
    res.json(image)
})


router.delete("/images/:id(\\d+)", async(req:express.Request, res:express.Response, next: express.NextFunction)=>{
    const {id} = req.params;
    const image = await prisma.image.delete({
        where:{
            id:Number(id)
        }
    })

    // res.json() //??????????/
})