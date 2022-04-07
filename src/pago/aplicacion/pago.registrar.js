const PagoRegistrar = (PagoMongo) => async(pago) => {
    const PagoNew = PagoMongo.create(pago);
    return PagoNew;
}
module.exports = PagoRegistrar