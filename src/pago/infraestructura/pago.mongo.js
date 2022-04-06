const mongoose = require('mongoose');
const PagoModel = require('../dominio/pago.model');
async function create(pago) {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const PagoNew = new PagoModel(pago);
        await PagoNew.save({ session });
        await session.commitTransaction();
        return Promise.resolve(PagoNew);

    } catch (error) {
        await session.abortTransaction();
        return Promise.reject(error);
    } finally {
        await session.endSession();
    }
}
async function search(params) {
    try {
        const PagoList = await PagoModel.find(params);
        return Promise.resolve(PagoList);

    } catch (error) {
        return Promise.reject(error);
    }
}
async function eliminate() {
    try {
        //buscar al usuario por su dni
        // { Dni: usuario.Dni }

        await PagoModel.deleteOne({});
        return Promise.resolve(true);

    } catch (error) {
        return Promise.reject(error);
    }
}
async function update(pago) {
    const session = await mongoose.startSession();
    try {
        const filter = {_id};
        session.startTransaction();
        const pagoUpdate = await PagoModel.findOneAndUpdate(filter, pago).session(session);
        if (!pagoUpdate) {
            throw new Error('Pago no encontrado');
        }
        await session.commitTransaction();
        return Promise.resolve(pago);

    } catch (error) {
        await session.abortTransaction();
        return Promise.reject(error);
    } finally {
        await session.endSession();
    }
}

const PagoMongo = { create, search, eliminate, update };
module.exports = PagoMongo;