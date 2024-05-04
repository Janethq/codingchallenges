/*-----------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

const sumNumbers = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  //initialise before loop so sum can accumulate at each loop-run
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //increment by arr number
    sum += arr[i];
  }
  //only return the sum after the loop finish iterating over all the elements
  return sum;
};

console.log(sumNumbers([5, 10]));
console.log(sumNumbers([2, 10, -5]));
console.log(sumNumbers([]));
