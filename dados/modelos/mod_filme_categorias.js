const Sequelize = require('sequelize');
const database = require('../conectaBD');
const Filme = require('./mod_filme')
const Categoria = require('./mod_categoria')

const FilmeCategorias = database.define('tb_filme_categorias', {}, { timestamps: false })

//Relação entre Filmes e Categorias

//1 Filme tem N categorias
Filme.belongsToMany(Categoria, {
    through: { model: FilmeCategorias },
    foreignKey: "fca_idFilme"
})


//1 Categoria tem M Filmes
Categoria.belongsToMany(Filme, {
    through:{model:FilmeCategorias},
    foreignKey:"fca_idCategoria"
})

module.exports = FilmeCategorias;