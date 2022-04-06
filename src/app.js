/*----------------------------------------------------------------------------

# Author        :@alumno

* Date          :@2022-03-25

* version       :@1.0.0

* Description   : Api Rest MongoDb

*----------------------------------------------------------------------------*/

require('dotenv').config();

const usuarioRouter = require('./usuario/infraestructura/usuario.router')

const pagoRouter = require('./pago/infraestructura/pago.router')

const port = process.env.node_port || 3000;

const express = require('express');

const cors = require('cors')

const app = express();

const server = require('http').Server(app);

app.get('/', (req, res) => {

    res.send('<h1>Gestion-Gasto Master - Online </h1>');

});

app.use(cors())
app.use(express.json())
app.use('/api/v1', usuarioRouter)
app.use('/api/v1', pagoRouter)
server.listen(port, () => {

    // mongodb().then(()=>console.log("ok")).catch((err) => console.log(err));

    console.log(`Server running on port ${port}`);

});