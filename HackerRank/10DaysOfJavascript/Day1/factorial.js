/* 
Implement a function named factorial that has one parameter, an integer, n.
It must return the value of n! (i.e., n factorial)
*/


function factorial(n) {
  let result = n;
  for (let i = n-1; i > 0; i--) {
    result *= i;
  }
  return result;
}
