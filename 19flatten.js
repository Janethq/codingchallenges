/*-----------------------------------------------------------------
Challenge: 19-flatten
Difficulty:  Intermediate
Prompt:
- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.
Hint:
- This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.
- cannot use .flat()
Examples:
flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 
flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------*/
// Your solution for 19-flatten here:
// access every element in the array -> if it is nested, access every element in the nested array.
// .push into the new array

function flatten(arr) {
  const newFlatten = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (Array.isArray(arr[i])) {
      newFlatten.push(...flatten(arr[i]));
    } else {
      newFlatten.push(arr[i]);
    }
  }
  return newFlatten;
}
console.log(flatten([1, [2, [3, [4]]], 1, "a", ["b", "c"]]));
