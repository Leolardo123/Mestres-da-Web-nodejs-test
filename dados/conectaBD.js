const Sequelize = require('sequelize');
const database = new Sequelize({
    dialect: 'sqlite',
    storage: './banco_fisico/banco.sqlite'
  })
 
module.exports = database;