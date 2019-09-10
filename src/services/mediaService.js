'use strict'
const config = require('../config/config.json');
var request = require('request');

getPessoaMedida(config.firebase.livros, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Aqui podes ver o HTML da página pedida. 
  }
})