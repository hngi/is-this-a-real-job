import cloudinaryStorage from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';

export const storage = cloudinaryStorage({
  cloudinary,
  folder: 'itarj',
  transformation: [{
    width: 500, height: 250, crop: 'scale', quality: 'auto'
  }],
  allowedFormats: ['jpg', 'jpeg', 'png'],
});
