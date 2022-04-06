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

import mongoose, { Schema, model } from require("mongoose")
const usuarioSchema = Schema(
    {
        Dni:{
            type: String,
            required: true,
            unique: true
        },
        Nombres:{
            type: String,
            required: true,
        },
        ApellidoPaterno:{
            type: String,
            required: true,
        },
        ApellidoMaterno:{
            type: String,
            required: true,
        },
        Nacimiento:{
            type: Date,
            required: true,
        },
        FechaRegistro:{
            type: Date,
            required: true,
        },
        FechaActualizacion:{
            type: Date,
            required: true,
        },
        EstadoActivo:{
            type: Boolean,
            required: true,
        },
        Ciclo:{
            type: String,
            required: true,
        },
    }
);
const UsuarioModel = model(
    'usuario', usuarioSchema
)
module.exports = UsuarioModel



