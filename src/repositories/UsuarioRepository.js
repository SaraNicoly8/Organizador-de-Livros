import connection from '../database/connection.js';

class UsuarioRepository {

    async listar() {

        const [usuarios] =
            await connection.execute(
                'SELECT * FROM usuarios'
            );

        return usuarios;
    }

    async cadastrar(usuario) {

        await connection.execute(
            `
            INSERT INTO usuarios
            (nome,email,senha,nivel)
            VALUES(?,?,?,?)
            `,
            [
                usuario.nome,
                usuario.email,
                usuario.senha,
                usuario.nivel
            ]
        );
    }

    async buscarPorEmail(email) {

        const [usuario] =
            await connection.execute(
                'SELECT * FROM usuarios WHERE email=?',
                [email]
            );

        return usuario[0];
    }

    async deletar(id) {

        await connection.execute(
            'DELETE FROM usuarios WHERE id=?',
            [id]
        );
    }
}

export default new UsuarioRepository();
