'use strict';

const request = require('request');

const log4js = require('log4js');
const log = log4js.getLogger();

const hostname = 'https://patrickbathu-d382a.firebaseio.com';
const path = '/pessoas.json';

var headers = { 
    'Content-Type' : 'application/json' 
};

exports.get = async() => {
    request.get(hostname + path, (err, res, body) => {
        if (err) {
            return console.dir(err);
        }
        console.log("Recuperando dados Firebase ")
    });
}

exports.create = async(data) => {
    console.log("Salvando dados Firebase " + data)
    request.put({ url: hostname+path, form: data, headers: headers }, (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
    });
} 

