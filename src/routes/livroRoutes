const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/', livroController.listar);
router.post('/cadastrar', livroController.cadastrar);
router.get('/editar/:id', livroController.editarForm);
router.post('/editar/:id', livroController.atualizar);
router.get('/deletar/:id', livroController.deletar);

module.exports = router;
