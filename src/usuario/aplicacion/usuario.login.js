const UsuarioLogin = (UsuarioMongo) => async(dni, clave) => {
    const UsuarioNew = UsuarioMongo.login(dni, clave);
    return UsuarioNew;
}
module.exports = UsuarioLogin