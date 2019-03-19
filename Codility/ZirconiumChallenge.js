/**
 * 
 * @param {[number]} A Contribution count of front-end developers
 * @param {[number]} B Contribution count of back-end developers
 * @param {number} F Number of front-end developers
 * @return number Maximum sum of contributions for company
 */

function solution(A, B, F) {
    if (F === 0) {
        return B.reduce((total, current) => total + current);
    }
    if (F === A.length) {
        return A.reduce((total, current) => total + current);
    }
    let tradeOffs = tradeOff(A, B);
    let trades = mostAdvantageous(tradeOffs, F);
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      if (trades[i]) {
        count += A[i];
      } else {
        count += B[i];
      }
    }
    return count;
  }
  
  function tradeOff(A, B) {
    let tradeOffs = [];
    for (let i = 0; i < A.length; i++) {
      tradeOffs[i] = A[i] - B[i];
    }
    return tradeOffs;
  }
  
  function mostAdvantageous(tradeOffs, F) {
    let max = {}
    let i = 0;
    while (i < F) {
      let currentMax = -Infinity;
      let currentIndex = null;
      for (let j = 0; j < tradeOffs.length; j++) {
        if (max[j] === undefined) {
          if (tradeOffs[j] > currentMax) {
            currentMax = tradeOffs[j];
            currentIndex = j;
          }
        }
      }
      max[currentIndex] = currentMax;
      i++;
      currentMax = -Infinity;
    }
    return max;
  }