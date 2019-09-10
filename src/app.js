const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const config = require('./config');

const app = express();

const routes = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Livros = require('./models/livros');

// Carrega as Rotas
const indexRoute = require('./routes/index');
const livroRoute = require('./routes/livro-route');
const pessoaMedidaRoute = require('./routes/pessoa-medida-route');

app.use(bodyParser.json({
	limit: '5mb'
}));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//ROTAS
app.use('/', indexRoute);
app.use('/v1/livro', livroRoute);
app.use('/v1/personal', pessoaMedidaRoute);

module.exports = app;



