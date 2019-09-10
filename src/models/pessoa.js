'use strict';

const mongoose = require('mongoose');
const Pessoa = mongoose.Schema;

const schema = new Pessoa({
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
    medidas: {
        type: Medida,
        required: false
    }
});

module.exports = mongoose.model('Pessoa', schema);