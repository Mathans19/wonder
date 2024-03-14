import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import cors from 'cors'; // Import CORS middleware

const router = express.Router();

// Use CORS middleware for all routes
router.use(cors());

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;


/* routes.js
import express from 'express';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/upload', authenticate, uploadImage);

export default router;*/
