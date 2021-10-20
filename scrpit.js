const nums = [100, 2, 5, 42, 99];
const odds = nums.filter(function(num) {
  if (num % 2 !== 0)
    return true
  else
    return false
});
console.log(odds);
/*--- using an arrow function for the callback ---*/
const odds1 = nums.filter(num => num % 2 !== 0);
console.log(odds1)