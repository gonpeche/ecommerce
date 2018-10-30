const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/ecommerce')


const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        validate:{
            isEmail: true,
            isUnique: function(value,next){
                User.find({
                    where:{email:value}
                })
                .then(function(user,error){
                    if(error) return next("ESO NO SE PUEDE HACER");
                    if(user) return next('El mail ya existe')
                    next();
                })
                .catch(error => console.log(error));
            }
        },
    },
    userSalt: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})
