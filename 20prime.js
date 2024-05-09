/*-----------------------------------------------------------------
Challenge: 20-isPrime
Difficulty: Intermediate
Prompt:
- Write a function named isPrime that returns true when the integer argument
  passed to it is a prime number and false when the argument passed to it is not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly
  divisible by only itself.

Examples:
isPrime(2) //=> true
isPrime(3) //=> true 
isPrime(4) //=> false
isPrime(7) //=> true
isPrime(10) //=> false
isPrime(29) //=> true
isPrime(200) //=> false
-----------------------------------------------------------------*/
// Your solution for 20-isPrime here:
// whole number
// greater than 1
// divisible by itself
//loop

const isPrime = (num) => {
  //checking for the number passed in
  // if (Math.ceil(num) && num > 1) {
  //checking if it is only divisible by itself
  //use sqrt() method!
  for (i = 2; i < num; i++) {
    console.log(i);
    // I want the loop to stop when I know num is not a prime number
    if (num % i === 0) {
      return false;
    }
  }
  return true;
  // }

  return false;
};
console.log(isPrime(3));
console.log(isPrime(2));
console.log(isPrime(10));
