const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
  let firstWhiteCarIdx = cars.findIndex(function(car) {           
    return car.color === 'white';

  });
     console.log('firstWhiteCarIdx=',firstWhiteCarIdx);
  
  
  // firstWhiteCarIdx equals 1
  let missingCarIdx = cars.findIndex(function(car) {
    return car.color === 'black';
  });
  // missingCarIdx = -1
  console.log('missingCarIdx=',missingCarIdx)
  /*--- using an arrow function for the callback ---*/
  let firstWhiteCarIdx2 = cars.findIndex(car => car.color === 'white');
  console.log('firstWhiteCarIdx2=',firstWhiteCarIdx2)


  //Find the index of the first car whose year is older than 2014
  // and assign it to a variable named notTooOldCarIndex;
let notTooOldCar=cars.findIndex(old=>old.year<2014);
console.log('notTooOldCar=',notTooOldCar)
