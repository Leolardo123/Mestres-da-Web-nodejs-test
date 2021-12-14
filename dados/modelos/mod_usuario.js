const Sequelize = require('sequelize');
const database = require('../conectaBD');
 
const Usuario = database.define('tb_usuario', {

    usu_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usu_nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usu_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usu_senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usu_acesso: {//nível de acesso a API ex: Gerente, Funcionário etc
        type: Sequelize.STRING,
        allowNull: false
    }

})
 
module.exports = Usuario;