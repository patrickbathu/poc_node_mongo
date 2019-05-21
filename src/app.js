const express = require('express');

const app = express();

const routes = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Livros = require('./models/livros');

// Carrega as Rotas
const indexRoute = require('./routes/index');

//ROTAS
app.use('/', indexRoute);

module.exports = app;



