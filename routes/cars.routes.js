'use strict';

const { Router } = require ('express');
const router = Router();
const carController = require('../controllers/car.controller');



    router.get('/add', carController.formCreateUsedCar);
    router.post('/createUsedCar', carController.createUsedCar);
    router.get('/usedCarCatalog', carController.list);
    router.get('/delete/:id', carController.deleteCar);
    router.get('/edit/:id', carController.renderUpdate);
    router.post('/edit/:id', carController.editCar);
    router.get('/details/:id', carController.details);
    router.get('/slider', (req, res)=>{
               res.render('templates/slider') });

    module.exports = router;