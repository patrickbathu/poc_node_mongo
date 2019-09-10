'use strict';
const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');

exports.create = async(data) => {
    var pessoa = new Pessoa(data);
    await pessoa.save();
}

exports.delete = async(id) => {
    await Pessoa
        .findOneAndRemove(id);
}

exports.update = async(id, data) => {
    await Pessoa
        .findByIdAndUpdate(id, data);
}

exports.get = async() => {
    const res = await Pessoa.find({}, 'title description ano image');
    return res;
}
