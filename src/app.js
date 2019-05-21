const express = require('express');

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

//ROTAS
app.use('/v1', indexRoute);
app.use('/v1/livro', livroRoute);

module.exports = app;



