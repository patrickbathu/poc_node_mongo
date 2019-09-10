'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
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
    }
});

module.exports = mongoose.model('Pessoa', schema);