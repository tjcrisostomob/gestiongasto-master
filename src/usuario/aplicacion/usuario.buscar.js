const UsuarioBuscar = (UsuarioMongo) => async(params) => {
    const UsuarioList = UsuarioMongo.search(params);
    return UsuarioList;
}
module.exports = UsuarioBuscar