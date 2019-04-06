function largestConsecutive(arr) {
  let max = -Infinity;
  let sum = 0;
  let neg = -Infinity;
  for (let i = 0; i < arr.length; i++) {  
    let negCount = 0;
    sum += arr[i];
    negCount += arr[i]; 
    if (sum < 0) {
      sum = 0;
    }
    if (negCount > neg) {
      neg = negCount
    }    
    if (max < sum) {
      max = sum;
    }
  }
  return max > 0 ? max : neg;
}
