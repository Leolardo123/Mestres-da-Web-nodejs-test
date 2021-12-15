const Sequelize = require('sequelize');
const database = require('../conectaBD');
const Categoria = require('./mod_categoria')
const FilmeCategorias = require('./mod_filme_categorias')
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

/*Filme.belongsToMany(Categoria, {
    through: { model: FilmeCategorias },
    foreignKey: "fca_idFilme"
})*/

module.exports = Filme;