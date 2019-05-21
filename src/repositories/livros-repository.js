'use strict';
const mongoose = require('mongoose');
const Livro = mongoose.model('Livro');

exports.create = async(data) => {
    var livro = new Livro(data);
    await livro.save();
}

exports.delete = async(id) => {
    await Livro
        .findOneAndRemove(id);
}

exports.update = async(id, data) => {
    await Livro
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.ano,
                slug: data.image
            }
        });
}

exports.get = async() => {
    const res = await Livro.find({}, 'title description ano image');
    return res;
}
