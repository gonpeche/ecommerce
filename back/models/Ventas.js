const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ecommerce');

const Ventas = db.define('ventas', {
  comprador: {
    type: Sequelize.STRING,
  },
  producto: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  status: {
    type: Sequelize.ENUM('creado', 'procesado', 'cancelado', 'completado'),
  },
  fecha: {
    type: Sequelize.DATE,
  },
  import: {
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
