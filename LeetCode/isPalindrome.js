/* Naive solution */
var isPalindrome = function(x) {
  x = x.toString();
  for (let i = 0, j = x.length - 1; i < x.length; i++, j--) {
    if (x[i] !== x[j]) {
      if (j - i !== 1) {
        return false;
      }
    }
  }
  return true;
};

/* Less naive solution after reading a C# solution */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 == 0 && x !== 0)) {
    return false;
  }
  let revertedNum = 0;
  while (x > revertedNum) {
    revertedNum = revertedNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == revertedNum || x == Math.floor(revertedNum / 10);
};
