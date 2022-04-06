const { usuarioCreate, usuarioSearch, usuarioEliminate, usuarioUpdate } = require('../aplicacion');
async function post(request, response) {
    try{
        const jwt = "inicial"; 
        const { Nombres, ApellidoPaterno, ApellidoMaterno,
                Nacimiento, FechaRegistro, FechaActualizacion,
                EstadoActivo, Ciclo} = request.body;
        const usuarioTmp = { Nombres, ApellidoPaterno, ApellidoMaterno,
            Nacimiento, FechaRegistro, FechaActualizacion,
            EstadoActivo, Ciclo, jwt};
        const UsuarioNew = await usuarioCreate(usuarioTmp);
        response.status(201).json(UsuarioNew);
    }   catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function get(request, response){
    try{
        const UsuarioNew = await usuarioSearch({ tipo:'a+', edad: 30 });
        response.status(201).json(UsuarioNew);
    }   catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function put(request, response){
    try{
        const jwt = "inicial"; 
        const {Dni, Nombres, ApellidoPaterno, ApellidoMaterno,
                Nacimiento, FechaRegistro, FechaActualizacion,
                EstadoActivo, Ciclo} = request.body;
        const usuarioTmp = { Dni,Nombres, ApellidoPaterno, ApellidoMaterno,
            Nacimiento, FechaRegistro, FechaActualizacion,
            EstadoActivo, Ciclo, jwt};
        const UsuarioNew = await usuarioUpdate(usuarioTmp);
        response.status(201).json(UsuarioNew);
    }   catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function deleted(request, response){
    try{
        const jwt = "inicial"; 
        const {Dni, Nombres, ApellidoPaterno, ApellidoMaterno,
                Nacimiento, FechaRegistro, FechaActualizacion,
                EstadoActivo, Ciclo} = request.body;
        const usuarioTmp = { Dni,Nombres, ApellidoPaterno, ApellidoMaterno,
            Nacimiento, FechaRegistro, FechaActualizacion,
            EstadoActivo, Ciclo, jwt};
        const UsuarioNew = await usuarioEliminate(usuarioTmp);
        response.status(201).json(UsuarioNew);
    }   catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

const UsuarioController = { post, get, put, deleted };
module.exports = UsuarioController;