const express = require('express'); 
const bodyParser = require('body-parser');

//Routers
const rtUsuario = require('./rotas/rotas_usuario')
const rtFilme = require('./rotas/rotas_filme')

const app = express(); 
 
//Midlewares
app.use(bodyParser.json());

//Rotas Aninhadas (nested routes)
app.use('/usuario',rtUsuario)
app.use('/filme',rtFilme)


//Sinalizador de API ligada
app.get('/', (req, res, next) => {
    res.json({message: "api em funcionamento"});
})

module.exports = app