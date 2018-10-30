const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ecommerce');

const Producto = require('./Producto');
const User = require('./Users');
const Review = require('./Reviews');
const Venta = require('./Ventas');
const Categoria = require('./Categorias');

const modelos = {
  Producto,
  User,
  Review,
  Venta,
  Categoria,
};

module.exports = {
  modelos,
  db,
  User,
};