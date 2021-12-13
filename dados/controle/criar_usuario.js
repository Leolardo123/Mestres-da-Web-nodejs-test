async function executar() {
    const database = require('./db');
    const usuario = require('./produto');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};
 
module.exports = Produto;