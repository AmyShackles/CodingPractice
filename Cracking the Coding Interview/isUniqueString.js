/*
Implement an algorithm to determine if a string has all unique chracters.  What if you cannot use additional data structures? 
*/

function isUniqueSorting(arr) {
  // Brute force, no additional data structure
  arr = sortString(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      return false;
    }
  }
  return true;
}

function sortString(array) {
  let arr = array.split('')
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      while (arr[i] > arr[i+1]) {
      [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ]
      }
    }
  }
  return arr;
}

// isUniqueSorting('uniqe')

function isUniqueStringWithObject(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr.charAt(i)] !== undefined) {
      return false;
    } else {
      seen[arr.charAt(i)] = arr.charAt(i);
    }
  }
  return true;
}

isUniqueStringWithObject('weavl')

function isUniqueStringWithSet(arr) {
  return new Set(arr).size === arr.length;
}
// isUniqueStringWithSet('adfriy')
