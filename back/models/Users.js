const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ecommerce');

const User = db.define('user', {
  nombre: {
    type: Sequelize.STRING,
  },
  apellido: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
      isEmail: true,
      isUnique: function(value, next) {
        User.find({
          where: { email: value },
        })
          .then(function(user, error) {
            if (error) return next('ESO NO SE PUEDE HACER');
            if (user) return next('El mail ya existe');
            next();
          })
          .catch(error => console.log(error));
      },
    },
  },
  comprasRealizadas: {
    type: Sequelize.ARRAY(Sequelize.TEXT) // REVISAR
  },
  carrito: {
    type: Sequelize.ARRAY(Sequelize.TEXT) // REVISAR
  },
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  userSalt: {
    type: Sequelize.STRING, // REVISAR
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefono: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

module.exports = { User }