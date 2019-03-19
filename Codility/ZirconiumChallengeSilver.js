/**
 * 
 * @param {[number]} A Contribution count of front-end developers
 * @param {[number]} B Contribution count of back-end developers
 * @param {number} F Number of front-end developers
 * @return number Maximum sum of contributions for company
 */


 // This iteration failed all of the performance tests due to 
 // its slow runtime
function solution(A, B, F) {
  /*If the number of front-end developers is 0,
    we only need to count up the back-end developers' tasks */
    if (F === 0) {
        return B.reduce((total, current) => total + current);
    }
    /* If the number of front-end developers is equal to the
      number of developers on the team, we just need to 
      sum the tasks of the front-end developers */
    if (F === A.length) {
        return A.reduce((total, current) => total + current);
    }
    let tradeOffs = tradeOff(A, B);
    let trades = mostAdvantageous(tradeOffs, F);
    let count = 0;
    /* Whichever decisions we made in the other functions
      as far as which indexes will provide the most benefit
      in switching to A, we count the value of that index in
      the A array.  Otherwise, we take the B values and count 
      those */
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
    /* Since we're trying to find F number of front-end 
    developers, we need to figure out what we gain (or lose)
    from making the switch to A from B */
    for (let i = 0; i < A.length; i++) {
      tradeOffs[i] = A[i] - B[i];
    }
    return tradeOffs;
  }
  
  function mostAdvantageous(tradeOffs, F) {
    /* Since we're going to be dealing with potentially
      high F values and we need a reference to both the 
      index and the value, an object seems like a good
      place to start for keeping track of which trade
      is in our best interest */
    let max = {}
    let i = 0;
    while (i < F) {
      let currentMax = -Infinity; // Any value will be higher
      let currentIndex = null; // Any value will replace
      /* Iterate through the list of tradeOffs and find the
        maximum value in the list - repeat F number of times.
        This is our bottleneck. */
      for (let j = 0; j < tradeOffs.length; j++) {
        /* Since we're iterating over the array multiple
          times, we need to make sure that the index hasn't
          already been assigned to the object on an earlier
          pass through the array */
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