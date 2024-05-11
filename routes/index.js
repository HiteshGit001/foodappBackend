import express from 'express';
import { createRequest, readAllMessages, updateMessage } from '../controller/messages/messages.js';
import { upload, uploadDoc } from '../controller/uploadDoc/uploadDoc.js';
import { addCategory, readAllCategory, updateCategory } from '../controller/categorys/categorys.js';

const router = express.Router();
router.post('/message', createRequest);
router.post('/update-message', updateMessage);
router.get("/all-messages", readAllMessages)
router.post("/upload-doc", upload.single("filename"), uploadDoc);
router.post("/add-category", addCategory);
router.post('/update-category', updateCategory);
router.get('/categorys', readAllCategory)
export default router;