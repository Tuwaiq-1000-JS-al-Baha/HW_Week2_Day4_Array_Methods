
/* find ,,findIndex */ 
const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
]
/* find ************** */
let notTooOldCar = cars.find(function (car) {
    return car.year < 2014;
});
console.log("notTooOldCar ",notTooOldCar)
/*** findIndex *****/
let notTooOldCarIndex = cars.findIndex(function (car) {
    return car.year < 2014;
});
console.log("notTooOldCarIndex = "+notTooOldCarIndex)
