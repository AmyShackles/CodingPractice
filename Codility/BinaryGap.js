function solution(number) {
    let output;
    let string = [];
    let i = 0;
    while (number != 0) {
      remainder = number % 2;
      number = Math.floor(number / 2);
      string[i] = remainder;
      i++;
    }
    string = reverseInPlace(string);
    count = countRuns(string);
    return count;
  }
  
  function countRuns(string) {
    let maxCount = -Infinity;
    let i = 0;
    for (let j = 0; j < string.length; j++) {
      let currentCount = 0;
      if (string[j] === '0') {
        i = j;
        while (string[i] === '0') {
          currentCount++;
          i++;
        }
        if (string[i] !== '1') {
          break;
        }
      }
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      i = 0;
    }
    return maxCount;
  }
  
  function reverseInPlace(string) {
    let start = 0;
    let end = string.length - 1;
    while (start < end) {
      [ string[start], string[end] ] = [ string[end], string[start] ];
      start++;
      end--;
    }
    return string.join('')
  }
  
  
  
  solution(1201)