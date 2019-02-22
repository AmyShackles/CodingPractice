/*
Given 6x6 2D array A
An hourglass is a subset of values with indices falling in this pattern in A's graphical representation:
a b c
  d
e f g
There are 16 hourglasses in A and an hourglass sum is the sum of an hourglass's values.

Calculate the hourglass sum for every hourglass in A and print the maximum hourglass sum.

Values range from -9 to 9 inclusive 
*/

/* 
0 0 0 
0 0 0 
0 0 0 

00 01 02
11
20 21 22

*/

function iterateThroughShape(n) {
  let left = 0;
  let right = n[0].length - 2;
  let top = 0;
  let bottom = n.length - 2;
  let max = -Infinity;

  while (top < bottom) {
    while (left < right) {
      let current = makeHourglass(n, top, left);
      if (current > max) {
        max = current;
      }
      left++;
    }
    left = 0;
    top++;
  }
  return max;
}

function makeHourglass(n, top, left) {
  let currentRow = top;
  let end = top + 3;
  let count = 0;
  let startLeft = left;
  let leftEnd = left + 3;
  for (top; top < end; top++) {
    left = startLeft;
    if (top === currentRow || top === currentRow + 2) {
      for (left; left < leftEnd; left++) {
        count += n[top][left];
      }
    }
    left = startLeft + 1;
    if (top === currentRow + 1) {
      count += n[top][left];
    }
  }
  return count;
}

function main() {
  let arr = Array(6);

  let inputString = `1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`;
  inputString = inputString.split("\n");

  for (let i = 0; i < 6; i++) {
    arr[i] = inputString[i].split(" ").map(arrTemp => parseInt(arrTemp, 10));
  }

  return iterateThroughShape(arr);
}

main();
