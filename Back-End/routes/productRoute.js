import {
        addProducts,
        getAllProducts,
        getOneProduct,
        updateProduct,
        deleteProduct
} from '../controller/productController.js';

import { Router } from 'express';
import {verifyToken} from '../middelware/auth.js'

const router = Router();

router.post('/',addProducts);
router.get('/', verifyToken, getAllProducts);
router.delete('/:id',verifyToken,deleteProduct);
router.get('/:id',verifyToken, getOneProduct);
router.patch('/:id',verifyToken, updateProduct);

export default router;
