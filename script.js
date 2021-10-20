const nums = [100, 2, 5, 42, 99];
// const odds = nums.filter(function(num) {
//   if (num % 2 !== 0)
//     return true
//   else
//     return false
// });
// console.log(odds);
/*--- using an arrow function for the callback ---*/
const odds = nums.filter(num => num % 2 !== 0);

console.log(odds)


                // **Question 5:**
                // * Filter out all "jerks"!
                // * Put them in an array called jerks

//js
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
// jerks equals ["jerks", "jerks"]
const jerks = people.filter(person => person ==="jerks")
console.log(jerks)




const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
//   let firstWhiteCar = cars.find(function(car) {
//     return car.color === 'white';
//   });
//   // firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}
  let missingCar = cars.find(function(car) {
    return car.color === 'black';
  });
  // missingCar = undefined
  /*--- using an arrow function for the callback ---*/
  let firstWhiteCar = cars.find(car => car.color === 'white');

  const notTooOldCar = cars.find(car => car.year < 2014)
  console.log(notTooOldCar)
  // notTooOldCar = {color: 'red', make: 'BMW', year: 2001}
  const notTooOldCarindx = cars.findIndex(car => car.year < 2014)
  console.log(notTooOldCarindx)

