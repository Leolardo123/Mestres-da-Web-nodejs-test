const express = require('express'); 
const bodyParser = require('body-parser');

//Routers
const rtUsuario = require('./rotas/rotas_usuario')
const rtFilme = require('./rotas/rotas_filme')

const app = express(); 
 
//Midlewares
app.use(bodyParser.json());
app.use(rtUsuario)
app.use(rtFilme)


//Sinalizador de API ligada
app.get('/', (req, res, next) => {
    res.json({message: "api em funcionamento"});
})

module.exports = app