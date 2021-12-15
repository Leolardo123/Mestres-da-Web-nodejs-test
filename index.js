//index.js
const http = require('http'); 
const porta = 3000;


//Carrega todas as rotas da API
const app = require('./rotas')

//Banco de Dados
const sequelize = require('./dados/conectaBD')
sequelize.sync().then(()=>{console.log("Banco de dados carregado com sucesso!")})

//Inicia o servidor com as rotas carregadas
const server = http.createServer(app); 
server.listen(porta);

console.log("Servidor escutando na "+porta+"...")