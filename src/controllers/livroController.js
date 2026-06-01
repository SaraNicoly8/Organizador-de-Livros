const livroModel = require('../models/livroModel');

function listar(req, res) {
  const livros = livroModel.listarLivros();
  res.render('index', { livros });
}

function cadastrar(req, res) {
  const { titulo, autor, sinopse, anoPublicacao, genero } = req.body;

  if (!titulo || !autor || !anoPublicacao || !genero || !sinopse) {
    return res.send('Preencha todos os campos!');
  }

  livroModel.adicionarLivro({ titulo, autor, anoPublicacao, genero, sinopse });

  res.redirect('/');
}

function editarForm(req, res) {
  const livro = livroModel.buscarLivroPorId(req.params.id);

  if (!livro) return res.send('Livro não encontrado!');

  res.render('editar', { livro });
}

function atualizar(req, res) {
  const { titulo, autor, genero, anoPublicacao, sinopse } = req.body;

  if (!titulo || !autor || !genero, !anoPublicacao, !sinopse) {
    return res.send('Preencha todos os campos!');
  }

  livroModel.atualizarLivro(req.params.id, { titulo, autor, genero, sinopse, anoPublicacao });

  res.redirect('/');
}

function deletar(req, res) {
  livroModel.deletarLivro(req.params.id);
  res.redirect('/');
}
//Jesus te ama!
module.exports = { listar, cadastrar, editarForm, atualizar, deletar };
