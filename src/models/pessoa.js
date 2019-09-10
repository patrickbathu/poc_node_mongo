'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pessoa = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    idade: {
        type: Number,
        required: true,
        trim: true
    },
    altura: {
        type: Number,
        required: true,
        trim: true
    },
    peso: {
        type: String,
        required: true,
        trim: true
    },
    imc: {
        type: String,
        required: true,
        trim: true
    },
    pessoa: [{type: Schema.Types.ObjectId, ref: 'Pessoa'}]
});

module.exports = mongoose.model('Pessoa', pessoa);