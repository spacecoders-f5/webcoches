'use strict'
//Lo primero que haremos será traer los objetos de la bd y meterlos en un array.
//Una vez que tenemos los 3 números, creamos un nuevo array compuesto por los elementos de la bd cuyo índice sean los números
//Por último haremos un return de esos elementos.

require("../../database");
const Cars = require("../../models/Car.js");

const findAllCars = ()=> {
    Cars.find({}).lean()
    .then(allCars=>{
         return allCars.lenght;
        })
    .catch(error=>{console.error(`el error es:${error}`)});
};
 
//Después necesitaremos generar 3 números aleatorios entre 0 y la longitud del array -1

const prueba = () =>{
    Cars.find({}).lean()
    .then(carsAll => {
        const carsAllLength = Object.keys(carsAll).length;
        // console.log(`Todos:\n ${carsAll}`);
        // console.log(Object.entries(carsAll)[0]);
        console.log(`La longitud es: ${carsAllLength}`);
        let arrayNum = [];
        let num='';
        for(let i=0; i<3; i++){
            
            do{
                 num = Math.floor(Math.random()*carsAllLength);
            }while(arrayNum.includes(num));

            console.log(`El número random es : ${num}`);
            arrayNum.push(num);
            console.log(`ArrayNum : ${arrayNum}`);
        }
        let arrayAnu = [];
        for (const num of arrayNum) {
            arrayAnu.push(Object.entries(carsAll)[num])
        };
        console.log(`Los elemetos seleccionados son:\n ${arrayAnu}`);
    });
};
prueba();
// const allCarsLength = allCars.length;
// console.log(allCarsLength);


// const randomCars = ()=> {
//     findAllCars()
//     .then(cars =>{console.log(cars.length)})
//     .catch(e => console.error(e));
    
// }
// randomCars();