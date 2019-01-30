/* Learning about some discrete mathematics.
   I wanted to test some of the proofs and realized I could write a function
   to calculate the factorial so I wouldn't have to type so many things into 
   a calculator.  XD */

function nth_factorial(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
