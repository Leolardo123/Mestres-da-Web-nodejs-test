const Sequelize = require('sequelize');
const database = require('../conectaBD');
const Filme = require('./mod_filme')
const Categoria = require('./mod_categoria')
 
const FilmeCategorias = database.define('tb_filme_categorias', {})


//chaves estrangeinras
FilmeCategorias.belongsTo(Filme, {foreignKey: {name:'fca_idFilme',allowNull: false}})
FilmeCategorias.belongsTo(Categoria, {foreignKey: {name:'fca_idCategoria',allowNull: false}})
 
module.exports = FilmeCategorias;