'use strict'

const schedule = require('node-schedule');

/**/ 
const http = require('http');
/** */
const debug = require('debug')('testenode:server');
/** */
const express = require('express');

const bodyParser = require('body-parser');

/** */
const app = require('../src/app')

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function(){
    console.info('app rodando na porta ' + PORT);
});
