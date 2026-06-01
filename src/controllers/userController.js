const usuarioModel = require('../models/usuarioModel');

function listar(req, res) {
  const usuarios = usuarioModel.listarUsuarios();
  res.render('index', { usuarios });
}

function cadastrar(req, res) {
  const { nome, email, senha } = req.body;

  if (!email || !nome || !senha) {
    return res.send('Preencha todos os campos!');
  }

  usuarioModel.adicionarUsuario({ email, nome, senha });

  res.redirect('/');
}


function atualizar(req, res) {
  const { email, nome, senha } = req.body;

  if (!email || !nome || !senha) {
    return res.send('Preencha todos os campos!');
  }

  usuarioModel.atualizarUsuario(req.params.id, { email , nome, senha });

  res.redirect('/');
}

function deletar(req, res) {
  usuarioModel.deletarUsuario(req.params.id);
  res.redirect('/');
}
//Jesus te ama!
module.exports = { listar, cadastrar, atualizar, deletar };
