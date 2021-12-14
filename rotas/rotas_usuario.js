const express = require('express'); 
const app = express();
const ctrlUsu = require('../dados/controle/ctrl_usuario')

app.post('/cadastrar', (req, res, next) => {
    console.log('recebido')
    ctrlUsu.create(req.body).then(()=>{
        res.json({msg:'usuário criado com sucesso!'})
    })
})

app.get('/usuario:id',(req,res)=>{
    ctrlUsu.getUsuario(req.body.id)
})

module.exports = app