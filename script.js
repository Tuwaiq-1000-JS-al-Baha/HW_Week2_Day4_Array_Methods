const nums = [100, 2, 5, 42, 99];

const odds = nums.filter(num => num % 2 !== 0);

console.log(odds)
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

const name=people.filter( name=> name==="jerks")

console.log(name)

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
  let firstWhiteCar = cars.find(function(car) {
    return car.color === 'white';

  });
  console.log('first white car is',firstWhiteCar)
  
 let missingCar = cars.find(function(car) {
    return car.color === 'black';

  });
  console.log("missingCar=", missingCar)
  
  /*--- using an arrow function for the callback ---*/
 let firstWhiteCar1 = cars.find(car => car.color === 'white');
  console.log(firstWhiteCar1)
  // notTooOldCar = {color: 'red', make: 'BMW', year: 2001}
let notTooOldCar=cars.find(old=>old.year<2014);
console.log('notTooOldCar=',notTooOldCar)


