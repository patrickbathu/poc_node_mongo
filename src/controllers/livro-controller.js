'use strict';

const repository = require('../repositories/livros-repository');
var config = require('../config');

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            title: req.body.title,
            description: req.body.description,
            ano: req.body.ano,
            image: 'https://nodestr.blob.core.windows.net/product-images/' + 'imagemteste.jpg' 
        });
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}