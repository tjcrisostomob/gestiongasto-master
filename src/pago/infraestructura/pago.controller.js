const { pagoCreate, pagoSearch, pagoEliminate, pagoUpdate } = require('../aplicacion');
async function post(request, response) {  

    try{  
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
    }   catch (error) {  
        console.log(error)  
        response.status(400).send(error);  
    }  
} 

async function get(request, response){  
    try{
        var _id = request.query._id;
        console.log(request.query._id);
        var filtros = {};
        if (_id != undefined) {
            filtros = { _id: _id };
        }
        const PagoNew = await pagoSearch(pagoTmp);  
        response.status(201).json(PagoNew); 
    }   catch (error) {  
        console.log(error) 
        response.status(400).send(error);  
    }  
} 

async function put(request, response){  
    try{  
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
    }   catch (error) {  
        console.log(error)  
        response.status(400).send(error);  
    }  
} 

async function deleted(request, response){ 

    try{
        const {
            _id,
        } = request.body;
        const usuarioTmp = {
            _id,
        };
        const PagoNew = await pagoEliminate(usuarioTmp); 
        response.status(201).json(PagoNew); 
    }   catch (error) { 
        console.log(error) 
        response.status(400).send(error); 
    } 
} 

const UsuarioController = { post, get, put, deleted }; 
module.exports = UsuarioController; 