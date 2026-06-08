export default class Livro {
    #id;
    #titulo;
    #autor;
    #sinopse;
    #anoPublicacao;
    #genero;

    constructor(id, titulo, autor, sinopse, anoPublicacao, genero){
        this.#id = id;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#sinopse = sinopse;
        this.#anoPublicacao = anoPublicacao;
        this.#genero = genero;
    }

    get id(){ return this.#id; }
    get titulo(){ return this.#titulo; }
    get autor(){ return this.#autor; }
    get sinopse(){ return this.#sinopse; }
    get anoPublicacao(){ return this.#anoPublicacao; }
    get genero(){ return this.#genero; }

    set titulo(valor){ this.#titulo = valor; }
    set autor(valor){ this.#autor = valor; }
    set sinopse(valor){ this.#sinopse = valor; }
    set anoPublicacao(valor){ this.#anoPublicacao = valor; }
    set genero(valor){ this.#genero = valor; }
}
