'use strict';

const repository = require('../repositories/pessoa-media-repository');
var config = require('../config');

exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
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
        var data = await repository.get(req.params.id);
        console.log(data)
        res.status(200).send(data);
    } catch (e) {
        console.error(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getAll = async(req, res, next) => {
    try {
        var data = await repository.getAll();
        console.log(data)
        res.status(200).send(data);
    } catch (e) {
        console.error(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        console.log(req.body)  
        await repository.update(req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body._id)
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};