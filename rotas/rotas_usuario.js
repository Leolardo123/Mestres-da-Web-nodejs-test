const express = require('express'); 
const app = express();
const ctrlUsu = require('../dados/controle/ctrl_usuario')
var routUsu = require('express').Router();

routUsu.route('/')

app.route('/')
.get((req,res)=>{
    ctrlUsu.getUsuarios().then((usuarios)=>{
        res.json(usuarios)
    })
})
.post((req, res, next) => {
    ctrlUsu.create(req.body).then(()=>{
        res.json({msg:'usuário criado com sucesso!'})
    })
})

app.route('/:id').get((req,res)=>{
    console.log(req)
    ctrlUsu.getUsuario(req.params.id).then((usuarios)=>{
        res.json(usuarios)
    })
})

module.exports = app