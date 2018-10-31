var db = require('./db');
const Sequelize = require('sequelize');


const Categorias = db.define('categorias', {
  nombre: {
    type: Sequelize.STRING
  }
});

module.exports = Categorias 