const jwt = require("jsonwebtoken");
const UsuarioModel = require("../usuario/dominio/usuario.model")
async function auth(req, res, next) {
    try {
        if (!req.headers["authorization"]) {
            throw new Error("No se encontro la cabecera de autorizacion");
        }
        // "beare 123abc 123" => ["beare", "123abc", "123"]
        const token = req.headers["authorization"].replace("Bearer ", "");
        console.log(token);
        const data = jwt.verify(token, process.env.jwt_secret);
        console.log(data);
        const usuario = await UsuarioModel.findOne({ _id: data._id });
        console.log(usuario);
        if (!usuario) {
            throw new Error("Usuario no encontrado");
        }
        req.usuario = usuario;
        next();
    } catch (error) {
        res.status(401).send({ error: error.message })

    }
}
module.exports = auth