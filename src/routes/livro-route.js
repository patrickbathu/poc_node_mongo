'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/livro-controller');

router.post('/', controller.post);
router.get('/', controller.get);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;