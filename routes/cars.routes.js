'use strict';

const { Router } = require ('express');
const router = Router();
const carController = require('../controllers/car.controller');



    router.get('/usedCars/add', carController.formCreateUsedCar);
    router.post('/usedCars/createUsedCar', carController.createUsedCar);
    router.get('/usedCarCatalog', carController.list);
    router.get('/usedCars/delete/:id', carController.deleteCar);
    router.get('/usedCars/details/:id', carController.details);

module.exports = router;