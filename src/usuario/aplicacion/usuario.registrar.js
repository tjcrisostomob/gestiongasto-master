const UsuarioRegistrar = (UsuarioMongo) => async(usuario) => {
    const UsuarioNew = UsuarioMongo.create(usuario);
    return UsuarioNew;
}
module.exports = UsuarioRegistrar