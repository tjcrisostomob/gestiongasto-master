const express = require('express');
const UsuarioController = require('./usuario.controller');
const UsuarioRouter = express.Router();
UsuarioRouter.post('/usuario/post', UsuarioController.post);
UsuarioRouter.get('/usuario/get', UsuarioController.get);
UsuarioRouter.put('/usuario/put', UsuarioController.put);
UsuarioRouter.delete('/usuario/delete', UsuarioController.deleted);
module.exports = UsuarioRouter;