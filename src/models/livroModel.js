class Livro {
   #id;
   #titulo;
   #autor;
   #sinopse;
   #anoPublicacao;
   #genero;

    constructor(id, titulo, autor, sinopse, anoPublicacao, genero){
        this.#id = id
        this.#titulo = titulo
        this.#autor = autor
        this.#sinopse = sinopse
        this.#anoPublicacao = anoPublicacao
        this.#genero = genero
    }

    set titulo(novoTitulo) {
    this.#titulo = novoTitulo;
   }

    set autor(novoAutor) {
     this.#autor = novoAutor;
    }

    set sinopse(novaSinopse) {
     this.#sinopse = novaSinopse;
    }

    set anoPublicacao(novoAno) {
     this.#anoPublicacao = novoAno;
    }

    set genero(novoGenero) {
      this.#genero = novoGenero;
    }

    get id() {
        return this.#id;
    }

    get titulo() {
        return this.#titulo;
    }

    get autor() {
        return this.#autor;
    }

    get sinopse() {
        return this.#sinopse;
    }

    get anoPublicacao() {
        return this.#anoPublicacao;
    }

    get genero() {
        return this.#genero;
    }

}


let livros = [new Livro {
   'titulo': 'Dom Casmurro',
   'autor': 'Machado de Assis',
   'genero': 'Romance',
   'anoPublicacao': '1899',
   'sinopse': ' o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira.'
 }
]

function listarLivros() {
  return livros;
}

function adicionarLivro(livro) {
  const novoId = livros.length ? livros[livros.length - 1].id + 1 : 1;

  const novoLivro = {
    id: novoId,
    titulo: Livro.titulo,
    autor: Livro.autor,
    genero: Livro.genero,
    sinopse: Livro.sinopse,
    anoPublicacao: Livro.anoPublicacao
  };

  livros.push(novoLivro);
}

function buscarLivroPorTitulo(titulo) {
  return livros.find(l => l.titulo === titulo);
}

function buscarLivroPorAutor(autor) {
  return livros.find(l => l.autor === autor);
}

function buscarLivroPorGenero(genero) {
  return livros.find(l => l.genero === genero);
}

function atualizarLivro(id, dados) {
  const index = livros.findIndex(l => l.id === parseInt(id));

  if (index !== -1) {
    livros[index].titulo = dados.titulo;
    livros[index].autor = dados.autor;
    livros[index].anoPublicacao = dados.anoPublicacao;
    livros[index].genero = dados.genero;
    livros[index].sinopse = dados.sinopse;
  }
}

function deletarLivro(id) {
  livros = livros.filter(l => l.id !== parseInt(id));
}

export default {
  listarLivros,
  adicionarLivro,
  buscarLivroPorTitulo,
  buscarLivroPorAutor,
  buscarLivroPorGenero,
  atualizarLivro,
  deletarLivro
};
