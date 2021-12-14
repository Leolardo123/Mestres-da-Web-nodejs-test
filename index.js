//index.js
const http = require('http'); 
const porta = 3000;
const app = require('./rotas')


const server = http.createServer(app); 
server.listen(porta);

console.log("Servidor escutando na "+porta+"...")