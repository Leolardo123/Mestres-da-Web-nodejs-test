const Sequelize = require('sequelize');
const database = require('../conectaBD');
 
const FilmeCategorias = database.define('tb_filme_categorias', {}, { timestamps: false })

module.exports = FilmeCategorias;