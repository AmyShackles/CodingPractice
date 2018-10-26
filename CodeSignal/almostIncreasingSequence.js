/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
*/

// This took me a day to solve.  Codesignal says 1768 minutes.  It was not my best time.
function almostIncreasingSequence(sequence) {
  // After *many* iterations of trying to solve this, I finally decided to initialize the index variable at 1 instead of 0
  // This way, I could look at the value of the element before the current element even at the beginning of the array
  // Count is initialized at 0 and if the sequence "passes", it should have a count of 0 or 1
  let i = 1;
  let count = 0;
  // I figure if the array does not contain 2 or more integers, it can't be a sequence
  if (sequence.length <= 1) return false;
  // Iterate through the array until i is sequence.length - 1
  // This guarantees the ability to always examine the element at the next index in the array
  while (i < sequence.length - 1) {
    /* if the element at the previous index is greater than or equal to the current element
        and the element at the previous index is less than the element at the next index,
        increment i and also increment count
        The reason you have to test if the previous element is less than the next element here
        is to ensure that the out of place element is the current index and not the previous one */
    if (sequence[i - 1] >= sequence[i]) {
      if (sequence[i - 1] < sequence[i + 1]) {
        i++;
        count++;
      } /* if the element at the previous index is greater than or equal to the current index
            and the element at previous index is greater than or equal to the element at the next index 
            - if the element at the current index is less than the element at the next index
            and the element at the current index is also greater than the element at the index before last
            increment count and increment i
            This is to catch the scenarios like [2, 5, 3, 5, 6] where [i-1] >= [i] and [i-1] >= [i+1]
            - but it's not really that two numbers are out of place */ else if (
        sequence[i - 1] >= sequence[i + 1]
      ) {
        if (sequence[i] < sequence[i + 1] && sequence[i] > sequence[i - 2]) {
          count++;
          i++;
        } else if (i === 1 && sequence[i] < sequence[i + 2]) {
        /* if the element at the previous index is greater than or equal to the element at the current index
        and the element at the previous index is greater than or equal to the next element
        if i = 1 (so the previous element is the first in the array), 
        and the current element is less than the element after next
        increment count and increment i because there is only one error in the sequence at this point */
          count++;
          i++;
        } /* if the element at the previous index is greater than or equal to the element at the current index
        and the element at the previous index is greater than or equal to the element at the next index
        if the current index is not 1 and the element at the current index is not less than the element after next
        and the element at the current index is not less than the element at the next index while being less than 
        the element at the index before last, we know that there are two errors in a row, so return false
        */ else {
          return false;
        }
      }
    }
    /* If the current index is the second to last in the array 
    and the last element in the array is less than or equal to the element at the current index,
    increment count.  As it's the last index accessible in the while loop, there is no need to increment i */
    if (i === sequence.length - 2 && sequence[i + 1] <= sequence[i]) {
      count++;
    }
    // if the element at the previous index is less than the element at the current index, increment i
    if (sequence[i - 1] < sequence[i]) {
      i++;
    }
    // If the count becomes greater than 1, there is no need to continue iterating through the array,
    // so return false
    if (count > 1) {
      return false;
    }
  }
  // After the while loop, if the function sequence hasn't already returned false, it must be true
  return true;
}
