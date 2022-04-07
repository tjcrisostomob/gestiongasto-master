const { pagoCreate, pagoSearch, pagoEliminate, pagoUpdate } = require('../aplicacion');
async function post(request, response) {
    try {
        const jwt = "inicial";
        const {
            Titulo,
            Descripcion,
            Monto,
            FechaProceso,
            FechaRegistro,
            FechaActualizacion,
            EstadoActivo,
            Usuario
        } = request.body;
        const pagoTmp = {
            Titulo,
            Descripcion,
            Monto,
            FechaProceso,
            FechaRegistro,
            FechaActualizacion,
            EstadoActivo,
            Usuario,
        };
        const PagoNew = await pagoCreate(pagoTmp);
        response.status(201).json(PagoNew);
    } catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function get(request, response) {
    try {
        var usuarioId = request.query.usuarioId;
        var filtros = {};
        if (usuarioId != undefined) {
            filtros = {
                Usuario: { _id: usuarioId }
            };
        }
        const PagoNew = await pagoSearch(filtros);
        response.status(201).json(PagoNew);
    } catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function put(request, response) {
    try {
        const jwt = "inicial";
        const {
            Titulo,
            Descripcion,
            Monto,
            FechaProceso,
            FechaRegistro,
            FechaActualizacion,
            EstadoActivo,
            Usuario
        } = request.body;
        const pagoTmp = {
            Titulo,
            Descripcion,
            Monto,
            FechaProceso,
            FechaRegistro,
            FechaActualizacion,
            EstadoActivo,
            Usuario,
            jwt
        };
        const PagoNew = await pagoUpdate(pagoTmp);
        response.status(201).json(PagoNew);
    } catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

async function deleted(request, response) {

    try {
        const {
            _id,
        } = request.body;
        const pagoTmp = {
            _id,
        };
        const PagoNew = await pagoEliminate(pagoTmp);
        response.status(201).json(PagoNew);
    } catch (error) {
        console.log(error)
        response.status(400).send(error);
    }
}

const PagoController = { post, get, put, deleted };
module.exports = PagoController;