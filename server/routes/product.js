const express = require('express');
const { addProduct, deleteProduct, getAllProducts } = require('../controllers/productController');
const router = express.Router();
const  authMiddleware = require('../middlewares/auth-middleware')

router.post('/', authMiddleware, addProduct);
router.delete('/:id', authMiddleware, deleteProduct);
router.get('/', authMiddleware, getAllProducts);

module.exports = router;
