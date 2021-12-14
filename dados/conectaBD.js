const Sequelize = require('sequelize');
const database = new Sequelize('sqlite3','admin','admin',{
    dialect: 'sqlite',
    storage: './banco_fisico/banco.sqlite'
  })
 
module.exports = database;