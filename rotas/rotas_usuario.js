const express = require('express'); 
const app = express();
const ctrlUsu = require('../dados/controle/ctrl_usuario')

app.post('/login', (req, res, next) => {
    if(req.body.usu_nome === 'luiz' && req.body.usu_senha === '123'){
      const id = 1;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 3000 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Erro ao entrar...'});
})

app.get('/usuario:id',(req,res)=>{
    ctrlUsu.getUsuario(req.body.id)
})

module.exports = app