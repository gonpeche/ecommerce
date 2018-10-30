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

User.hasMany(Venta, { as: 'Compras' });

User.hasMany(Producto, { as: 'publicaciones' });

Producto.hasMany(Review, { as: 'Reviews' });

User.hasMany(Review, { as: 'userReviews' });

Producto.belongsToMany(Venta, { through: 'ProductoVenta' });
Venta.belongsToMany(Producto, { through: 'ProductoVenta' });

Categoria.belongsToMany(Producto, { through: 'ProductoxCategoria' });
Producto.belongsToMany(Categoria, { through: 'ProductoxCategoria' });






module.exports = {
  modelos,
  db,
  User,
};