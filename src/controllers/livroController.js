import livroRepository from "../repositories/LivroRepository.js";

async function listar(req,res){

    const livros =
        await livroRepository.listar();

    res.render("index",{livros});

}
async function cadastrar(req,res){

    try{

        const {
            titulo,
            autor,
            genero,
            anoPublicacao,
            sinopse
        } = req.body;

        if(!titulo){
            throw new Error(
                "Título obrigatório"
            );
        }

        await livroRepository.cadastrar(
            req.body
        );

        res.redirect("/");

    }catch(error){

        res.send(error.message);

    }

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
