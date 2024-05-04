/*-----------------------------------------------------------------
Challenge: 04-addList
Difficulty: Basic
Prompt:
- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).
Examples:
addList(1) //=> 1
addList(1, 50, 1.23) //=> 52.23
addList(7, -12) //=> -5
Hint: check rest params
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
-----------------------------------------------------------------*/
// Your solution for 04-addList here:

// ...args = rest param
const addList = (...args) => {
  let total = 0;
  // arg = each element in args list
  for (const arg of args) {
    total += arg;
  } return total
};
console.log(addList(1));
console.log(addList(1, 50, 1.23));
console.log(addList())