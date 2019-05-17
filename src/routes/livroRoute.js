const express = require('express');

const router = express.Router();

const request = require('request');

const config = require('../config/config.json');

router.get('/', function(req, res, next){
    res.status(200).send({
        livros : getFirebase()
    });
});

function getFirebase(){
    return new Promise(function(resove, reject){
        request.get(config.firebase.livros);
    }).then(result => {
        resove(result);
    });  
}

module.exports = router;
