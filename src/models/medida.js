'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    data: {
        type: String,
        required: true,
        trim: true
    },
    ombro: {
        type: String,
        required: false
    },
    peito: {
        type: String,
        required: false,
        trim: true
    },
    cintura: {
        type: String,
        required: false,
        trim: true
    },
    abdomen: {
        type: String,
        required: false,
        trim: true
    },
    quadril: {
        type: String,
        required: false,
        trim: true
    },
    panturrilha: {
        type: String,
        required: false,
        trim: true
    },
    coxa: {
        type: String,
        required: false,
        trim: true
    },
    braco: {
        type: String,
        required: false,
        trim: true
    }
});

module.exports = mongoose.model('Medida', schema);