export default class Usuario {
    #id;
    #email;
    #nome;
    #senha;

    constructor(id,email,nome,senha){
        this.#id = id;
        this.#email = email;
        this.#nome = nome;
        this.#senha = senha;
    }

    get id(){ return this.#id; }
    get email(){ return this.#email; }
    get nome(){ return this.#nome; }
    get senha(){ return this.#senha; }

    set email(valor){ this.#email = valor; }
    set nome(valor){ this.#nome = valor; }
    set senha(valor){ this.#senha = valor; }
}
