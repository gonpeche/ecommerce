var db = require('./db');
const Sequelize = require('sequelize');

const Ventas = db.define('ventas', {
  producto: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  cantidad: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('creado', 'procesado', 'cancelado', 'completado'),
  },
  fecha: {
    type: Sequelize.DATE,
  },
  importe: {
    type: Sequelize.INTEGER
  },
  direccion: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

module.exports = Ventas 
