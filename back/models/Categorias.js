const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ecommerce');

const Categorias = db.define('categorias', {
  nombre: {
    type: Sequelize.STRING
  },
  productos: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

module.exports = Categorias 