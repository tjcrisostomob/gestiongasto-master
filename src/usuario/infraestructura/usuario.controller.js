const { usuarioCreate, usuarioSearch, usuarioEliminate, usuarioUpdate } = require('../aplicacion');
async function post(request, response) {
    try {
        const jwt = "inicial";
        const {
            Dni,
            CodigoUniversitario,
            Nombres,
            ApellidoPaterno,
            ApellidoMaterno,
            Nacimiento,
            FechaRegistro,
            FechaActualizacion,
            EstadoActivo,
            Ciclo
        } = request.body;
        const usuarioTmp = {
            Dni,
            CodigoUniversitario,
            Nombres,
            ApellidoPaterno,
            ApellidoMaterno,
            Nacimiento,
            FechaRegistro,
            FechaActualizacion,
            EstadoActivo,
            Ciclo,
            jwt
        };
        const UsuarioNew = await usuarioCreate(usuarioTmp);
        response.status(201).json(UsuarioNew);
    } catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function get(request, response) {
    try {
        var Dni = request.query.Dni;
        var filtros = {};
        if (Dni != undefined) {
            filtros = { Dni: Dni };
        }
        const UsuarioNew = await usuarioSearch(filtros);
        response.status(201).json(UsuarioNew);
    } catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function put(request, response) {
    try {
        const jwt = "inicial";
        const {
            _id,
            Dni,
            CodigoUniversitario,
            Nombres,
            ApellidoPaterno,
            ApellidoMaterno,
            Nacimiento,
            FechaRegistro,
            FechaActualizacion,
            EstadoActivo,
            Ciclo
        } = request.body;
        const usuarioTmp = {
            _id,
            Dni,
            CodigoUniversitario,
            Nombres,
            ApellidoPaterno,
            ApellidoMaterno,
            Nacimiento,
            FechaRegistro,
            FechaActualizacion,
            EstadoActivo,
            Ciclo,
            jwt
        };
        const UsuarioNew = await usuarioUpdate(usuarioTmp);
        response.status(201).json(UsuarioNew);
    } catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function deleted(request, response) {
    try {
        const {
            Dni,
        } = request.body;
        const usuarioTmp = {
            Dni,
        };
        const UsuarioNew = await usuarioEliminate(usuarioTmp);
        response.status(201).json(UsuarioNew);
    } catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

const UsuarioController = { post, get, put, deleted };
module.exports = UsuarioController;