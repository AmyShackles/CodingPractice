/* Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.
*/
function makeArrayConsecutive2(statues) {
  // sort the array of statues to guarantee closest numbered statues are next to each other
  let sorted = statues.sort((x, y) => x > y);
  // initialize a variable to represent the number of statues necessary
  let num = 0;
  // run through a for loop until every array element has been examined
  // if the statue at the next index minus the element at the current index != 1,
  // we know there are missing statues
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] - sorted[i] !== 1) {
      // if there are missing statues, take the result of element at next index - element at current index
      // and subtract one (because there should be a difference of one)
      // add that value to the number of statues necessary
      num += sorted[i + 1] - sorted[i] - 1;
    }
  }
  // after the for loop runs through, return that number
  return num;
}

makeArrayConsecutive2([6, 2, 3, 8]);
makeArrayConsecutive2([70, 71, 69]);
