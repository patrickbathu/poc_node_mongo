'use strict'

/**/ 
const http = require('http');
/** */
const debug = require('debug')('testenode:server');
/** */
const express = require('express');

const bodyParser = require('body-parser');

/** */
const app = require('../src/app')

const PORT = 3000;

const HOST = '0.0.0.0';

app.listen(PORT, HOST);