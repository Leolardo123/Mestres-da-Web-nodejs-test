const express = require('express'); 
const app = express();
const ctrlFilme = require('../dados/controle/ctrl_filmes')
var routFim = require('express').Router();

routFim.route('/')

app.route('/')
.post((req, res, next) => {
    ctrlFilme.create(req.body).then(()=>{
        res.json({msg:'filme cadastrado com sucesso!'})
    })
})
.get((req,res)=>{
    console.log("filmes")
    ctrlFilme.getFilmes()
})

app.route('/:id').get((req,res)=>{
    ctrlFilme.getFilme(req.params.id)
})

module.exports = app