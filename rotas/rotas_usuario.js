const express = require('express'); 
const app = express();
const ctrlUsu = require('../dados/controle/ctrl_usuario')
var routUsu = require('express').Router();

routUsu.route('/')

app.post('/', (req, res, next) => {
    ctrlUsu.create(req.body).then(()=>{
        res.json({msg:'usuário criado com sucesso!'})
    })
})

app.get('/',(req,res)=>{
    ctrlUsu.getUsuario()
})

app.get('/:id',(req,res)=>{
    ctrlUsu.getUsuario(req.body.id)
})

app.use('/usuario',routUsu)

module.exports = app