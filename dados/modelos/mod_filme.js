const Sequelize = require('sequelize');
const database = require('../conectaBD');

const Filme = database.define('tb_filmes', {

    fim_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fim_nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }

})

module.exports = Filme;