import connection from '../database/connection.js';

class LivroRepository {

    async listar() {

        const [livros] =
            await connection.execute(
                'SELECT * FROM livros'
            );

        return livros;
    }

    async cadastrar(livro) {

        await connection.execute(
            `
            INSERT INTO livros
            (titulo, autor, genero, anoPublicacao, sinopse)
            VALUES (?, ?, ?, ?, ?)
            `,
            [
                livro.titulo,
                livro.autor,
                livro.genero,
                livro.anoPublicacao,
                livro.sinopse
            ]
        );
    }

    async atualizar(id, livro) {

        await connection.execute(
            `
            UPDATE livros
            SET titulo=?,
                autor=?,
                genero=?,
                anoPublicacao=?,
                sinopse=?
            WHERE id=?
            `,
            [
                livro.titulo,
                livro.autor,
                livro.genero,
                livro.anoPublicacao,
                livro.sinopse,
                id
            ]
        );
    }

    async deletar(id) {

        await connection.execute(
            'DELETE FROM livros WHERE id=?',
            [id]
        );
    }
}

export default new LivroRepository();
