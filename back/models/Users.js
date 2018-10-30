const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ecommerce');

const User = db.define('user', {
  nombre: {
    type: Sequelize.STRING,
  },
  apellido: {
    type: Sequelize.STRING,
  },
});

module.exports = User 
