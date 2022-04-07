const PagoActualizar = (PagoMongo) => async(pago) => {
    const PagoUpdate = PagoMongo.update(pago);
    return PagoUpdate;
}
module.exports = PagoActualizar