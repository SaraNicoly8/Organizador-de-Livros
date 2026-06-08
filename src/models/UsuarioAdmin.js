import Usuario from "./Usuario.js";

export default class UsuarioAdmin extends Usuario {

    exibirNivel(){
        return "Administrador";
    }

}
