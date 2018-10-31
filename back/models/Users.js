var db = require('./db');
const Sequelize = require('sequelize');

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
            isEmail: true,
            isUnique: function (value, next) {
                User.find({
                    where: { email: value },
                })
                    .then(function (user, error) {
                        if (error) return next('ESO NO SE PUEDE HACER');
                        if (user) return next('El mail ya existe');
                        next();
                    })
                    .catch(error => console.log(error));
            },
        },
    },
    carrito: {
        type: Sequelize.ARRAY(Sequelize.TEXT),

    },
    admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            /* allowNull: false, */
        }
    },
    salt: {
        type: Sequelize.STRING,
    },
    telefono: {
        type: Sequelize.INTEGER,
    }
});

module.exports = User;
