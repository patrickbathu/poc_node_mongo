'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    ano: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    __v:{
        type: Number,
        required: false,
        trim: true
    }
});

module.exports = mongoose.model('Livro', schema);