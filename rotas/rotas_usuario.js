const express = require('express'); 
const app = express();
const ctrlUsu = require('../dados/controle/ctrl_usuario')
var routUsu = require('express').Router();

routUsu.route('/')

app.route('/')
.get((req,res)=>{
    console.log("usuario")
    ctrlUsu.getUsuario()
})
.post((req, res, next) => {
    console.log("usuario")
    ctrlUsu.create(req.body).then(()=>{
        res.json({msg:'usuário criado com sucesso!'})
    })
})

app.route('/:id').get((req,res)=>{
    ctrlUsu.getUsuario(req.body.id)
})

app.use('/usuario',routUsu)

module.exports = app