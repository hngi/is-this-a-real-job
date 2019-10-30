/* eslint-disable max-len */
import multer from 'multer';
import { storage } from '../helpers/cloudinaryStorage';

export const multerUploads = multer({ storage }).array('media', 10);
