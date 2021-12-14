const express = require('express'); 
const app = express();
const ctrlAcessos = require('../dados/controle/ctrl_acessos')
var routAce = require('express').Router();

routUsu.route('/')

app.post('/', (req, res, next) => {
    ctrlAcessos.create(req.body).then(()=>{
        res.json({msg:'acesso criado com sucesso!'})
    })
})

app.get('/',(req,res)=>{
    ctrlAcessos.get()
})

app.get('/:nome',(req,res)=>{
    ctrlAcessos.get(req.body.nome)
})

app.use('/acesso',routAce)

module.exports = app