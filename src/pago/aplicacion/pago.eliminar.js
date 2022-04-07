const PagoEliminar = (PagoMongo) => async(Pago) => {
    const PagoNew = PagoMongo.eliminate(Pago);;
    return true;
}
module.exports = PagoEliminar