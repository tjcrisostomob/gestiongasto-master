const UsuarioEliminar = (UsuarioMongo) => async(usuario) => {
    const isEliminated = UsuarioMongo.eliminate(usuario);
    return isEliminated;
}
module.exports = UsuarioEliminar