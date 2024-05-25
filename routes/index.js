import express from 'express';
import { createRequest, readAllMessages, updateMessage } from '../controller/messages/messages.js';
import { upload, uploadDoc } from '../controller/uploadDoc/uploadDoc.js';
import { addCategory, readAllCategory, updateCategory } from '../controller/categorys/categorys.js';
import { addProduct, getProductList, updateProduct } from '../controller/products/products.js';
import { _connectToES } from '../controller/elasticsearch.js';
import { addSeller, getSellersList, updateSeller } from '../controller/sellers/sellers.js';

const router = express.Router();
router.post('/message', createRequest);
router.post('/update-message', updateMessage);
router.get("/all-messages", readAllMessages)
router.post("/upload-doc", upload.single("filename"), uploadDoc);
router.post("/add-category", addCategory);
router.post('/update-category', updateCategory);
router.get('/categorys', readAllCategory);
router.get("/get-products", getProductList);
router.post('/add-product', addProduct);
router.post('/update-product', updateProduct);
router.get('/get-seller', getSellersList);
router.post('/add-seller', addSeller);
router.post('/update-seller', updateSeller);
// elastic search
router.post('/connect-to-es', async (req, res) => {
    const { index } = req.body;

    if (!index) {
        return res.status(400).send('Index is required');
    }

    try {
        await _connectToES(index);
        res.status(200).send('Elasticsearch setup completed successfully');
    } catch (error) {
        console.error('Error connecting to Elasticsearch:', error);
        res.status(500).send('Failed to connect to Elasticsearch');
    }
});
export default router;