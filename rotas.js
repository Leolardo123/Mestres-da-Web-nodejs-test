const express = require('express'); 
const bodyParser = require('body-parser');
const rtUsuario = require('./rotas/rotas_usuario')

const app = express(); 
 
app.use(bodyParser.json());
app.use(rtUsuario)

app.get('/', (req, res, next) => {
    res.json({message: "api em funcionamento"});
})

module.exports = app