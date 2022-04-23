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

// mi cambio

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const usuarioSchema = mongoose.Schema({
    CodigoUniversitario: {
        type: String,
        required: true,
        unique: true
    },
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
    jwt: {
        type: String,
        required: false
    },
    Clave: {
        type: String,
        required: true
    }
});
usuarioSchema.method("generarAuthToken", async function() {
    const user = this;
    const jwtNew = jwt.sign({ _id: user._id }, process.env.jwt_secret);
    user.jwt = jwtNew;
    await user.save();
    return jwtNew;
});

usuarioSchema.pre("save", async function() {
    const usuario = this;
    if (usuario.isModified("Clave")) {
        usuario.Clave = await bcrypt.hash(usuario.Clave, 8);
    }
    // Junior => JUNIOR
    if (usuario.isModified("Nombres")) {
        usuario.Nombres = usuario.Nombres.toUpperCase();
    }

});
const UsuarioModel = mongoose.model(
    'usuario', usuarioSchema
)
module.exports = UsuarioModel