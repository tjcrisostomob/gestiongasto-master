const PagoBuscar = (PagoMongo) => async(params) => {
    const PagoList = PagoMongo.search(params);
    return PagoList;
}
module.exports = PagoBuscar