class Usuario {
   #id;
   #email;
   #nome;
   #senha;

    constructor(id, email, nome, senha){
        this.#id = id 
        this.#email = email
        this.#nome = nome
        this.#senha = senha
    }

    set email(novoEmail) {
    this.#email = novoEmail;
   }

    set nome(novoNome) {
     this.#nome = novoNome;
    }

    set senha(novaSenha) {
     this.#senha = novaSenha;
    }

    get email() {
        return this.#email;
    }

    get nome() {
        return this.#nome;
    }

    get senha() {
        return this.#senha;
    }
}

let usuarios = [
   new Usuario {
      'email': 'saraoliveira@email.com',
      'nome': 'Sarah Oliveira',
      'senha' : 'sarahosaraho'
   }
]

function cadastrarUsuario(Usuario) {
  const novoId = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;

  const novoUsuario = {
    email: Usuario.email,
    nome: Usuario.nome,
    senha: Usuario.senha
  };

  usuario.push(novoUsuario);
}

function deletarUsuario(id) {
  usuarios = usuarios.filter(l => l.id !== parseInt(id));
}

export default {
  cadastrarUsuario,
  deletarUsuario
};

