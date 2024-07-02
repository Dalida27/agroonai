const express = require('express');
const { addClient, deleteClient, getAllClients } = require('../controllers/clientController');
const router = express.Router();
const  authMiddleware = require('../middlewares/auth-middleware')

router.post('/',authMiddleware, addClient);
router.delete('/:id', authMiddleware, deleteClient);
router.get('/', authMiddleware, getAllClients);

module.exports = router;