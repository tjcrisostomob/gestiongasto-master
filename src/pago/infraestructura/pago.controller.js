const { pagoCreate, pagoSearch, pagoDelete, pagoUpdate } = require('../aplicacion');
async function post(request, response) {  

    try{  
        const jwt = "inicial";  
        const { Titulo, Descripcion, Monto, FechaProceso, FechaRegistro, FechaActualizacion, EstadoActivo, Usuario } = request.body;  
        const pagoTmp = { Titulo, Descripcion, Monto,  
            FechaProceso, FechaRegistro, FechaActualizacion,  
            EstadoActivo, Usuario, jwt};  
        const PagoNew = await pagoCreate(pagoTmp);  
        response.status(201).json(PagoNew); 
    }   catch (error) {  
        console.log(error)  
        response.status(400).send(error);  
    }  
} 

async function get(request, response){  
    try{  
        const PagoNew = await pagoSearch(pagoTmp);  
        response.status(201).json(PagoNew); 
    }   catch (error) {  
        console.log(error) 
        response.status(400).send(error);  
    }  
} 

async function put(request, response){  
    try{  
        const PagoNew = await pagoActualizar(pagoTmp);  
        response.status(201).json(PagoNew);  
    }   catch (error) {  
        console.log(error)  
        response.status(400).send(error);  
    }  
} 

async function deleted(request, response){ 

    try{ 
        const UsuarioNew = await usuarioEliminated(usuarioTmp); 
        response.status(201).json(UsuarioNew); 
    }   catch (error) { 
        console.log(error) 
        response.status(400).send(error); 
    } 
} 

const UsuarioController = { post, get, put, deleted }; 
module.exports = UsuarioController; 