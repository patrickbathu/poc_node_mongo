'use strict';

const request = require('request');
const config = require('../../config/config');

var headers = { 
    'Content-Type' : 'application/json' 
};

exports.get = async() => {
    request.get(config.firebase.pessoas, (err, res, body) => {
        if (err) {
            return console.dir(err);
        }
        console.log("Recuperando dados Firebase ")
    });
}

exports.create = async(data) => {
    console.log("Salvando dados Firebase start " + new Date())
    console.info("URL Firebase " +  config.firebase.pessoas)
    request.put({ url: config.firebase.pessoas, form: data, headers: headers }, (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }
        console.log("Salvando dados Firebase end " + new Date())
    });
} 

