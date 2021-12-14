const Sequelize = require('sequelize');
const database = require('../conectaBD');
 
const Acesso = database.define('tb_acessos', {

    ace_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ace_nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

})
 
module.exports = Acesso;