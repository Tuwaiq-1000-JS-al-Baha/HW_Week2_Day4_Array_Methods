# HW Week 2 day 4: JS Array methods part 2


### `filter`

**PURPOSE:** Select certain elements from a source array.

##### Obtain just the odd numbers

```js
const nums = [100, 2, 5, 42, 99];
const odds = nums.filter(function(num) {
  if (num % 2 !== 0)
    return true
  else
    return false
});
console.log(odds);
/*--- using an arrow function for the callback ---*/
const odds = nums.filter(num => num % 2 !== 0);
```

##### YOU DO

**Question 5:**
* Filter out all "jerks"!
* Put them in an array called jerks

```js
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
// jerks equals ["jerks", "jerks"]
```

---

### `find`

**PURPOSE:** Find an element within an array.

##### Find certain car objects

```js
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];
let firstWhiteCar = cars.find(function(car) {
  return car.color === 'white';
});
// firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}
let missingCar = cars.find(function(car) {
  return car.color === 'black';
});
// missingCar = undefined
/*--- using an arrow function for the callback ---*/
let firstWhiteCar = cars.find(car => car.color === 'white');
```

##### YOU DO

**Question 6:**

* Find the first car whose year is older than 2014 and assign it to a variable named `notTooOldCar`;

```js
// notTooOldCar = {color: 'red', make: 'BMW', year: 2001}
```
---


#### Extra bonus Questions:

### `findIndex`

**PURPOSE:** Like `find` above, but returns the found element's index. Note that this is usually used to find the index of an object, or one of its built-in variations (Array, Date, Regular Expression, Error) within the array. If trying to find the index of a primitive type, use `indexOf` instead.


##### Find the index of the first match

```js
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];
let firstWhiteCarIdx = cars.findIndex(function(car) {           
  return car.color === 'white';
});
// firstWhiteCarIdx equals 1
let missingCarIdx = cars.findIndex(function(car) {
  return car.color === 'black';
});
// missingCarIdx = -1
/*--- using an arrow function for the callback ---*/
let firstWhiteCarIdx = cars.findIndex(car => car.color === 'white');
```
---

##### YOU DO

**Bonus Question 1:**

* Find the index of the first car whose year is older than 2014 and assign it to a variable named `notTooOldCarIndex`;

```js
// notTooOldCarIndex = 0
```
