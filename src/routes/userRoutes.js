const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.listar);
router.post('/cadastrar', userController.cadastrar);
router.post('/editar/:id', userController.atualizar);
router.get('/deletar/:id', userController.deletar);

module.exports = router;

