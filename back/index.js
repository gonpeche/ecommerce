const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const db = require('./models/db');
const models = require('./models/index').modelos;


db.sync({force: true})
.then(function () {
    app.listen('3000', function () {
        console.log('listening at 3000');
    });
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../front/dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('../front/index.html'));
});
