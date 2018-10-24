/* Write a function integerPairs to find and print out all pairs of integers
 within an input array which sum up to a specified input value k.

 There are multiple ways to do this, depending upon whether you want to
 favor runtime or space.

 Example:

 integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
 // should print '6 5', '7 4', '8 3', '9 2', '10 1'

 Analyze the time and space complexity of your solution.
 */

// My solution - very naive and brute force
function integerPairs(arr, num) {
  let newarr = []; // initialize an empty array
  let i = 0; // index targeting the start of the array
  let j = arr.length - 1; // index targeting the end of the array
  while (i < Math.ceil(arr.length / 2) && j >= Math.ceil(arr.length / 2 - 1)) {
    // while the starting index and ending index do not meet in the middle ...
    if (arr[i] + arr[j] !== num) {
      // if the integer at the current start index +
      // the integer at the end index do not equal num:
      // move the end index closer to the start of the array
      // (Goal is to find the match for the numbers in array order)
      j--;
    }
    if (arr[i] + arr[j] === num) {
      // If the integer at the current start index +
      // the integer at the end index do equal num,
      // add the two integers to the end of the new array as a string
      // increment the start index to start finding the match to the next element
      newarr.push(`${arr[i]} ${arr[j]}`);
      i++;
    }
  }
  // return the new array
  return newarr;
}

integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);

/* Model solutions:
    1 - Runtime-efficient implementation that trades time efficiency for space efficiency
        O(n) runtime with O(n) space
*/
function integerPairs(arr, k) {
  // Use a hash to store key-value pairs of numbers
  const hash = {};
  // Loop through the arr
  arr.forEach((x, i) => {
    // check to see if the complement for the
    // current element exists in the hash
    if (hash[k - x]) {
      console.log(x, k - x);
    } else {
      // if it doesn't, then we hash this number
      // +1 so get around 0-indexing
      hash[x] = i + 1;
    }
  });
}

integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);

/*
  2 -   An alternative implementation that favors
        memory efficiency over time efficiency
        O(n log n) runtime due to the sorting
        with O(1) space
*/
function integerPairs(arr, k) {
  // sort the input array in-place
  arr.sort((x, y) => x - y);
  // initialize indices to track both ends of the array
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    const sum = arr[first] + arr[last];
    // check to see if the two elements sum up to k
    if (sum == k) {
      console.log(arr[first], arr[last]);
      first++;
      last--;
    } else {
      // if they don't then we decide whether we increment
      // the first index or decrement the last index
      if (sum < k) first++;
      else last--;
    }
  }
}

/* Some console.log tests */
console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
