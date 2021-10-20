//first question:
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter((person) = > person === "jerks")
console.log(jerks);
////////////////////////////////////////////////
//second question:
const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];

  // missingCar = undefined
/*--- using an arrow function for the callback ---*/
let notTooOldCar  = cars.find(car => car.year <2014);
console.log(noTootOldCar);
  //////////////////////////////////////////////////
  const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
// missingCarIdx = -1
/*--- using an arrow function for the callback ---*/
let notTooOldCarIdx =car.findIdx(cat1.year < 2014 );
console.log(notTooOldCarIdx);