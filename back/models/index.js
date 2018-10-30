const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/ecommerce')
const {Producto} = require('./Producto')
const {Users} = require('./Users')
const {Reviews} = require('./Reviews')
const {Ventas} = require('./Ventas')


const modelos = {
    Producto,
    Users,
    Reviews,
    Ventas
}

module.exports = {
    modelos
}