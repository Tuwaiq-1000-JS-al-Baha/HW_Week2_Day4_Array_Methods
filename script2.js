const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];

  const notTooOldCar = cars.find( function (carmodel) {
      return carmodel.year < 2014
  })

  const notTooOldCarIndex = cars.findIndex( function (carmodel) {
    return carmodel.year < 2014
})


  console.log(notTooOldCar)
  
  console.log(notTooOldCarIndex)