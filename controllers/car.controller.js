'use strict';
const input = require("../data/input.json");
const Car = require('../models/Car');

const carController = {};

carController.formCreateUsedCar = (req, res) => { 
    res.render('templates/formUsedCar',{formNewUsedCars:input.formNewUsedCars})  
};
carController.createUsedCar = async (req, res) =>{ 
    let {carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType} = req.body; 
    console.log(carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType);
    let newCar = new Car({carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType}); 
    console.log(req.body);
    await newCar.save();     
    res.redirect('/usedCarCatalog'); 
    
};

carController.list = async (req,res)=>{

    const cars = await Car.find({}).lean();
    res.render('templates/allUsedCarsTemplate',{carList:cars});
};

carController.deleteCar = async (req,res) => { 
    await Car.findByIdAndDelete(req.params.id) 
    res.redirect('/usedCarCatalog') 
};

carController.details = async (req, res) =>{
    const car = await Car.findById(req.params.id);
    res.render('templates/usedCars/usedCarDetails',{car})
};

module.exports = carController;