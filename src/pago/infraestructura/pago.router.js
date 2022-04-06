const express = require('express'); 
const PagoController = require('./pago.controller'); 
const PagoRouter = express.Router();
PagoRouter.post('/pago/post', PagoController.post);
PagoRouter.get('/pago/get', PagoController.get);
PagoRouter.put('/pago/put', PagoController.put);
PagoRouter.delete('/pago/delete', PagoController.deleted);
module.exports = PagoRouter;