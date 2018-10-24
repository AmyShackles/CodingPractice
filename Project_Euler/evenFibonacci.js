/* Problem 2
Even Fibonacci Numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms.  By starting with 1 and 2, the first 10 terms will be:
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonaaci sequence whose values do not exceed four million, find the sum of the even-valued terms
*/
function evenFibonacci() {
  let sum = 0;
  let fib = [1, 2];
  while (fib[fib.length - 1] < 4000000) {
    fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
  }
  for (let i = 0; i < fib.length; i++) {
    if (fib[i] % 2 === 0) {
      sum += fib[i];
    }
  }
  return sum;
}
evenFibonacci();
