'use strict'
//Lo primero que haremos será traer los objetos de la bd y meterlos en un array.
//Una vez que tenemos los 3 números, creamos un nuevo array compuesto por los elementos de la bd cuyo índice sean los números
//Por último haremos un return de esos elementos.

require("../../database");
const Cars = require("../../models/Car.js");

const findAllCars = ()=> {
    Cars.find({}).lean()
    .then(allCars=>{
         return allCars;
        })
    .catch(error=>{console.error(`el error es:${error}`)});
};
 
//Después necesitaremos generar 3 números aleatorios entre 0 y la longitud del array -1

const randomCars = async _=> {
    const arrayCars = await findAllCars()
    const arrayCarsLength = arrayCars.length;
    const num = Math.random()*arrayCarsLength;
    console.log(num);
}
randomCars();