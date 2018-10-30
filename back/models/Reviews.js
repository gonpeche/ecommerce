const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ecommerce');

const Review = db.define('review', {
  comentario: {
    type: Sequelize.STRING,
  },
  estrellas: {
    type: Sequelize.INTEGER
  }
});
// FALTA FK 
module.exports = Review 
