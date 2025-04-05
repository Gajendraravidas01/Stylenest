import {Router} from 'express'
import { verifyTokenAndAdmin } from '../middleware/verifyToken.js';
import { CreateProduct, getAllProduct, getProduct, updateProduct } from '../controllers/product.controller.js';

const router = Router();

router.route('/').post(verifyTokenAndAdmin,CreateProduct);
router.route('/:id').put(verifyTokenAndAdmin,updateProduct);
router.route('/find/:id').get(getProduct);
router.route('/').get(getAllProduct);

export default router;