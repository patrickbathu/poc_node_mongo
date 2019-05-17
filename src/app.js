const express = require('express');

const app = express();

const routes = express.Router();

//ROTAS
const index = require('./routes/index');
const livro = require('./routes/livroRoute');

app.use('/', index);
app.use('/livros', livro);

module.exports = app;



