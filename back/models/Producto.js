const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ecommerce');

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
    defaultValue: false // VER SI VALE LA PENA
  }
});

module.exports = Producto 