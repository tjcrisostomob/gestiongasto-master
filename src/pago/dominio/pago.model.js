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

const mongoose = require("mongoose")
const pagoSchema = mongoose.Schema({
        Titulo:{
            type: String,
            required: true,
        },
        Descripcion:{
            type: String,
            required: true,
        },
        Monto:{
            type: mongoose.Schema.Types.Decimal128,
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
});
const PagoModel = mongoose.model(
   'pago', pagoSchema
)
module.exports = PagoModel
