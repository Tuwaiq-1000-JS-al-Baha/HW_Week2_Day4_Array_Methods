const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];

const notTooOldCar=cars.find(car=>{
      return car.year<2014
  })
  console.log(notTooOldCar);