const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    
    carBrand: {type: String,
        required:false},
    
    carModel: {type: String,
            required:false},
    
    modelYear: {type: String,
            required:false},
    
    nextItvDate: String,
    
    sellingPrice: String,
    
    carImage: {
            type: String,
            required:false
    },
    carColor: {type: String,
            required:false},
    
    seatsNumber: {type: String,
            required:false},
    
    doorNumber: {type: String,
            required:false},
    
    transmissionType: {type: String,
            required:false},
    
    motorType: {type: String,
            required:false}
    
});

module.exports = model("Car", carSchema, "cars");