// const PagoModel = { 
//     Titulo: '', 
//     Descripcion: '', 
//     Monto: '', 
//     FechaProceso: '', 
//     FechaRegistro: '', 
//     FechaActualizacion: '', 
//     EstadoActivo: '', 
//     Usuario: ''
// } 

//mi cambio de Paolo

import mongoose, { Schema, model } from require("mongoose")
const pagoSchema = Schema(
    {
        Titulo:{
            type: String,
            required: true,
        },
        Descripcion:{
            type: String,
            required: true,
        },
        Monto:{
            type: Schema.Types.Decimal128,
            required: true,
        },
        FechaProceso:{
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
            type: String,
            required: true,
        },
        Usuario:{
            type: String,
            required: true,
        },
        
    }
)
const PagoModel = model(
   'pago', pagoSchema
)
module.exports = PagoModel
