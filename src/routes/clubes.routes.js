'use strict';

const express = require('express');
const controller = require('../controllers/clubes/clubes.controller')

module.exports = (() => {
    const router = new express.Router();


    router.get('/clubes/get-clubes', controller.getClubes);
    router.post('/clubes');
    router.put('/clubes/:id');
    router.delete('/clubes/:id');
    router.get('/clubes/:id');

    return router;
})();