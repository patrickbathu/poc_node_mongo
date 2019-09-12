'use strict';
const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');
const firebase = require('../repositories/firebase/firebase-repository');

exports.create = async(data) => {
    data.imc = data.peso / (data.altura * data.altura) 
    var pessoa = new Pessoa(data);
    await pessoa.save();
}

exports.delete = async(id) => {
    console.log(" Pessoa delete " + id)
    await Pessoa
        .findOneAndRemove(id);
}

exports.update = async(data) => {
    data.imc = data.peso / (data.altura * data.altura) 
    console.log(" Pessoa update " + data._id)
    await Pessoa
        .findByIdAndUpdate(data._id, data);
}

exports.get = async(id) => {
    const res = await Pessoa.findById(id);
    console.log(" Pessoa save firebase " + res)
    firebase.create(JSON.stringify(res));
    console.log(" Pessoa update " + res)
    return res;
}

