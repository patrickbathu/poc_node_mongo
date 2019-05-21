'use strict';
const mongoose = require('mongoose');
const Livro = mongoose.model('Livro');

exports.create = async(data) => {
    var livro = new Livro(data);
    await livro.save();
}