// const UsuarioModel = { 
//     Nombres: '', 
//     ApellidoPaterno: '', 
//     ApellidoMaterno: '', 
//     Nacimiento: '', 
//     FechaRegistro: '', 
//     FechaActualizacion: '', 
//     EstadoActivo: '', 
//     Ciclo: ''
// } 

const mongoose = require("mongoose")
const usuarioSchema = mongoose.Schema({
    Dni: {
        type: String,
        required: true,
        unique: true
    },
    Nombres: {
        type: String,
        required: true,
    },
    ApellidoPaterno: {
        type: String,
        required: true,
    },
    ApellidoMaterno: {
        type: String,
        required: true,
    },
    Nacimiento: {
        type: Date,
        required: true,
    },
    FechaRegistro: {
        type: Date,
        required: true,
    },
    FechaActualizacion: {
        type: Date,
        required: true,
    },
    EstadoActivo: {
        type: Boolean,
        required: true,
    },
    Ciclo: {
        type: String,
        required: true,
    },
});
const UsuarioModel = mongoose.model(
    'usuario', usuarioSchema
)
module.exports = UsuarioModel