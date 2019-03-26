/* 
Given an array of integers representing the color of a sock,
determine how many pairs of socks with matching colors
exist in the array 
*/

function sockMerchant(n, arr) {
  let cache = {};
  let pair = 0;
  for (let i = 0; i < n; i++) {
    if (cache[arr[i]] !== undefined) {
      if (cache[arr[i]].length < 1) {
        cache[arr[i]].push(i);
      } else {
        cache[arr[i]].pop();
        pair++;
      }
    } else {
      cache[arr[i]] = [i];
    }
  }
  return pair;
}
