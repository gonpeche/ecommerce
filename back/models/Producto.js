var db = require('./db');
const Sequelize = require('sequelize');

const Producto = db.define('producto', {
  nombre: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.TEXT,
  },
  precio: {
    type: Sequelize.INTEGER,
  },
  foto: {
    type: Sequelize.TEXT,
  },
  categoria: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  disponibilidad: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  stock: {
    type: Sequelize.INTEGER
  }
});

module.exports = Producto 
