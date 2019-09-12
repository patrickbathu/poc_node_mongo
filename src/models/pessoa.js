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
        type: Number,
        required: true,
        trim: true
    },
    imc: {
        type: Number,
        required: false,
        trim: true
    },
    medidas: [
        {
            data: {
                type: String,
                required: true,
                trim: true
            },
            ombro: {
                type: Number,
                required: false
            },
            peito: {
                type: Number,
                required: false,
                trim: true
            },
            cintura: {
                type: Number,
                required: false,
                trim: true
            },
            abdomen: {
                type: Number,
                required: false,
                trim: true
            },
            quadril: {
                type: Number,
                required: false,
                trim: true
            },
            panturrilha_direita: {
                type: Number,
                required: false,
                trim: true
            },
            panturrilha_esquerda: {
                type: Number,
                required: false,
                trim: true
            },
            coxa_direita: {
                type: Number,
                required: false,
                trim: true
            },
            coxa_esquerda: {
                type: Number,
                required: false,
                trim: true
            },
            braco_direito: {
                type: Number,
                required: false,
                trim: true
            },
            braco_esquerdo: {
                type: Number,
                required: false,
                trim: true
            }
        }
    ]
});

module.exports = mongoose.model('Pessoa', pessoa);