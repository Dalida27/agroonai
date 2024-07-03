const express = require('express');
const { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct} = require('../controllers/productController');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/', authMiddleware, addProduct);
router.delete('/:id', authMiddleware, deleteProduct);
router.get('/', authMiddleware, getAllProducts);
router.get('/:id', authMiddleware, getProductById);
router.put('/:id', authMiddleware, updateProduct);

module.exports = router;
