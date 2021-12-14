const express = require('express'); 
const app = express();
const ctrlFilme = require('../dados/controle/ctrl_filmes')
var routFim = require('express').Router();

routFim.route('/')

app.post('/', (req, res, next) => {
    ctrlFilme.create(req.body).then(()=>{
        res.json({msg:'filme cadastrado com sucesso!'})
    })
})

app.get('/',(req,res)=>{
    console.log("filmes")
    ctrlFilme.getFilmes()
})

app.get('/:id',(req,res)=>{
    ctrlFilme.getFilme(req.params.id)
})

app.use('/filme',routFim)

module.exports = app