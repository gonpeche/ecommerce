const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const db = require('./models/index').db;
const models = require('./models/index').modelos;

models.User.sync({ force: true })
    .then(function() {
        return models.Producto.sync({ force: false });
    })
    .then(function() {
        return models.Review.sync({ force: false });
    })
    .then(function() {
        return models.Venta.sync({ force: false });
    })
    .then(function() {
        return models.Categoria.sync({ force: false });
    })
    .then(function() {
        app.listen('3000', function() {
            console.log('listening at 3000');
        });
    })
    .catch(console.error);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../front/dist'));

app.get('/', function(req, res) {
    
    models.Producto.create({
        nombre: 'MAC BOOK PRO',
        descripcion: 'Producto de mac sobrevalorado',
        foto: 'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/space/mbp15touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1529520056969m',
        categoria: ['Pcs', 'Notebook'],
        disponibilidad: true,
    })
    models.Producto.create({
        nombre: 'Ipad',
        descripcion: 'Un celu grande',
        foto: 'https://http2.mlstatic.com/ipad-pro-129-64-gb-gris-ipad-pro-D_NQ_NP_967249-MLA26076837669_092017-F.webp',
        categoria: ['Ipad'],
        disponibilidad: false,
    })

    
    .catch((error) => console.log(error))
    .then(data => {
        res.sendFile(path.resolve('../front/index.html'));
    })
});
