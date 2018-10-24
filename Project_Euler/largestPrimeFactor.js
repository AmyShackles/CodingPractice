/* Problem 3
Largest prime factor

The prime factors of 13195 are 5, 7, 13, and 29.
What is the largest prime factor of the number 600851475143?
*/

function getLargestFactor(num) {
  let i = 2;
  let largestfactor;
  if (600851475143 % i !== 0) {
    i++;
  } else {
    largestfactor = 600851475143 / i;
  }
  return largestPrimeFactor(largestfactor);
}

function largestPrimeFactor(largestfactor) {
  let j = 2;
  while (largestfactor % j !== 0 && j < largestfactor / 2) {
    j++;
    if (largestfactor % j == 0) {
      largestPrimeFactor(largestfactor / 2);
    }
  }
}
