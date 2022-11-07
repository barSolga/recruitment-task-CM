import express, { Router } from "express";
import { 
    getAllProducts, 
    addProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct 
} from '../controllers/product.controller';

const router: Router = express.Router()

// setting routes
router.route('/')
    .get(getAllProducts)
    .post(addProduct);
router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;
export default router
