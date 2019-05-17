'use strict'

/**/ 
const http = require('http');
/** */
const debug = require('debug')('testenode:server');
/** */
const express = require('express');
/** 
const config = required('../config/config.json');
*/
/** */
const app = require('../src/app')


const port = '3000';

function normalizaPort(val){
    const port = parseInt(val , 10);
    if(isNaN(port)){
        return val;
    }

    if(port <= 0){
        return port;
    }

    return false;
}

/**
var app = express();
 */

app.listen(port, function() {
    console.log('app listening on port ${port}')
});

