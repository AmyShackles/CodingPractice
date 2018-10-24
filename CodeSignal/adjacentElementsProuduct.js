/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
  // initialize a variable that is always going to be lower than any input
  let max = -Infinity;
  // iterate through the array, multiplying the element at the current index
  // with the element at the next index
  // if that product is greater than max, it becomes the new max
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > max) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }
  // return the max after the for loop runs
  return max;
}
adjacentElementsProduct([3, 6, -2, -6, 7, 3]);
adjacentElementsProduct([-5, 2, 12, 1, 0, 2]);
