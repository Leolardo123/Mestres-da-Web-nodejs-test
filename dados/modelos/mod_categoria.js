const Sequelize = require('sequelize');
const database = require('../conectaBD');
const Filme = require('./mod_filme')
const FilmeCategorias = require('./mod_filme_categorias')

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

Categoria.belongsToMany(Filme, {
    through:{model:FilmeCategorias},
    foreignKey:"fca_idCategoria"
})
 
module.exports = Categoria;