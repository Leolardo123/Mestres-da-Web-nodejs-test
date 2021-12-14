//index.js
const http = require('http'); 
const porta = 3000;
const app = require('./rotas')
const sequelize = require('./dados/conectaBD')

sequelize.sync().then(()=>{console.log("Banco de dados carregado com sucesso!")})


const server = http.createServer(app); 
server.listen(porta);

console.log("Servidor escutando na "+porta+"...")