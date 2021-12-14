const Sequelize = require('sequelize');
const database = require('../conectaBD');
 
const Usuario = database.define('tb_usuarios', {

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
    usu_acesso: {
        type: Sequelize.ENUM("convidado","gerente","supervisor","pesquisador"),
        defaultValue:"convidado"
    }
})
 
module.exports = Usuario;