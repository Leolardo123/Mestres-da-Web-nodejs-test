const Sequelize = require('sequelize');
const database = require('../conectaBD');

const Categoria = database.define('tb_categorias', {

    cat_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cat_nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

module.exports = Categoria;