const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const { db } = require('./models/index');
const { User } = require('./models/index');

db.sync({ force: true }).then(
  app.listen('3000', () => console.log('listening to 3000')),
);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../front/dist'));

app.get('/', function (req, res) {
  /*  User.create({
     nombre: 'numa',
     apellido: 'apellido italiano'
   }).then(data => { */
  res.sendFile(path.resolve('../front/index.html'));
  /* }); */
});
