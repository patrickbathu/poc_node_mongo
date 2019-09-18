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

const port = '3000';


app.listen(port, function(){
    console.info('app rodando na porta 3000');
});
