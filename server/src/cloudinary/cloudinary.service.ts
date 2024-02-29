import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
// import streamifier from 'streamifier';
const streamifier = require('streamifier');
import { CloudinaryResponse } from './helpers/cloudinary.response';

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) return reject(error);

          resolve(result);
        },
      );

      //To solve not read undefined createReadStream
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}
