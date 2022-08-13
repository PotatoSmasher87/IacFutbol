'use strict';

const express = require('express');
const controller = require('../controllers/personas/personas.controller')

module.exports = (() => {
    const router = new express.Router();


    router.get('/clubes/get-personas', controller.getPersonas);
    router.post('/clubes/create-personas',controller.createPersonas);
    router.put('/clubes/update-personas/:id',controller.updatePersonas);
    router.delete('/clubes/delete-personas/:id',controller.deletePersonas);
    router.get('/clubes/get-persona/:id',controller.getPersona);

    return router;
})();