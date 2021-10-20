console.log("--filter--")
const nums = [100, 2, 5, 42, 99];
// const odds = nums.filter(function (num) {
//     if (num % 2 !== 0)
//         return true
//     else
//         return false
// });
// console.log(odds);
/*--- using an arrow function for the callback ---*/
const odds = nums.filter(num => num % 2 !== 0)
console.log(odds);

console.log("Q5")
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"]

const people2 = people.filter(person => person === "jerks")
console.log(people2)

console.log("--find--")
const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
];
// let firstWhiteCar = cars.find(function (car) {
//     return car.color === 'white';
// });
// // firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}
// let missingCar = cars.find(function (car) {
//     return car.color === 'black';
// });
// // missingCar = undefined
// /*--- using an arrow function for the callback ---*/
// let firstWhiteCar = cars.find(car => car.color === 'white');

console.log("Q6")

const olderCar = cars.find(function (car) {
    return car.year < 2014
})

console.log(olderCar)

console.log("--findIndex--")
// const cars = [
//     { color: 'red', make: 'BMW', year: 2001 },
//     { color: 'white', make: 'Toyota', year: 2013 },
//     { color: 'blue', make: 'Ford', year: 2014 },
//     { color: 'white', make: 'Tesla', year: 2016 }
// ];
// let firstWhiteCarIdx = cars.findIndex(function (car) {
//     return car.color === 'white';
// });
// // firstWhiteCarIdx equals 1
// let missingCarIdx = cars.findIndex(function (car) {
//     return car.color === 'black';
// });
// // missingCarIdx = -1
// /*--- using an arrow function for the callback ---*/
// let firstWhiteCarIdx = cars.findIndex(car => car.color === 'white');

const notTooOldCarIndex = cars.findIndex(car => car.year < 2014)

console.log(notTooOldCarIndex)