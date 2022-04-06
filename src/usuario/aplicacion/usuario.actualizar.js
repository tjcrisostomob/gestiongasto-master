const UsuarioActualizar = (UsuarioMongo) => async(usuario) => {
    const UsuarioNew = UsuarioMongo.update(usuario);
    return UsuarioNew;
}
module.exports = UsuarioActualizar