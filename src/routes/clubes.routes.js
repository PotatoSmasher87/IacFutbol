'use strict';

const express = require('express');
const controller = require('../controllers/clubes/clubes.controller')

module.exports = (() => {
    const router = new express.Router();


    router.get('/clubes/get-clubes', controller.getClubes);
    router.post('/clubes/create-clubes',controller.createClubes);
    router.put('/clubes/update-clubes/:id',controller.updateClubes);
    router.delete('/clubes/delete-clubes/:id',controller.deleteClubes);
    router.get('/clubes/get-club/:id',controller.getClub);

    return router;
})();