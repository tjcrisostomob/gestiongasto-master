const mongoose = require('mongoose');
const UsuarioModel = require('../dominio/usuario.model');
async function create(usuario) {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const UsuarioNew = new UsuarioModel(usuario);
        await UsuarioNew.save({ session });
        await session.commitTransaction();
        return Promise.resolve(UsuarioNew);

    } catch (error) {
        await session.abortTransaction();
        return Promise.reject(error);
    } finally {
        await session.endSession();
    }
}
async function search(params) {
    try {
        const UsuarioList = await UsuarioModel.find(params);
        return Promise.resolve(UsuarioList);

    } catch (error) {
        return Promise.reject(error);
    }
}
async function eliminate(usuario) {
    try {
        //buscar al usuario por su dni
        // { Dni: usuario.Dni }

        await UsuarioModel.deleteOne({ _id: usuario._id });
        return Promise.resolve(true);

    } catch (error) {
        return Promise.reject(error);
    }
}
async function update(usuario) {
    const session = await mongoose.startSession();
    try {
        const filter = { _id: usuario._id };
        session.startTransaction();
        const usuarioUpdate = await UsuarioModel.findOneAndUpdate(filter, usuario).session(session);
        if (!usuarioUpdate) {
            throw new Error('Usuario no encontrado');
        }
        await session.commitTransaction();
        return Promise.resolve(usuario);

    } catch (error) {
        await session.abortTransaction();
        return Promise.reject(error);
    } finally {
        await session.endSession();
    }
}
const UsuarioMongo = { create, search, eliminate, update };
module.exports = UsuarioMongo;