/* 
Given a string, write a function to check if it is a permutation of a palindrome.
*/
function isPalindromePermutation(str) {
  let frequencyTable = {};
  for (let i = 0; i < str.length; i++) {
    if (frequencyTable[str[i]] !== undefined) {
      frequencyTable[str[i]]++;
    } else {
      frequencyTable[str[i]] = 1;
    }
  }
  let values = Object.values(frequencyTable);
  if (values.length === str.length) {
    return false;
  } else {
    return checkTable(values, str.length)
  }
}
function checkTable(values, length) {
  let odd = 0;
  for (let i = 0; i < values.length; i++) {    if (odd > 1) {
      return false;
    }
    if (values[i] % 2 === 0) {
      continue;
    } else {
      odd++;
    }
  }
  return odd <= 1;
}

isPalindromePermutation('dof .   ofd')

function isPalindromePermutationSwitch(str) {
  let checked = {};
  let oddCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    switch(checked[char]) {
      case 'odd':
        checked[char] = 'even';
        oddCount--;
        break;
      case 'even':
        checked[char] = 'odd';
        oddCount++;
        break;
      default:
        checked[char] = 'odd';
        oddCount++;
    }
  }    
  return oddCount <= 1;
}
