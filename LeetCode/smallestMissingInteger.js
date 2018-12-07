var firstMissingPositive = function(nums) {
  let current;
  let indexForCurrent;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] < 0) {
      nums[i] = 0;
      i++;
    } else if (nums[i] > nums.length) {
      i++;
    }
    current = nums[i];
    indexForCurrent = current - 1;
    while (nums[i] != nums[indexForCurrent]) {
      if (current > 0 && current <= nums.length) {
        let next = nums[indexForCurrent];
        nums[indexForCurrent] = current;
        nums[i] = next;
        current = nums[i];
        indexForCurrent = current - 1;
      } else {
        nums[i] = 0;
        i++;
        current = nums[i];
        indexForCurrent = current - 1;
      }
    }
    i++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

/* I actually ended up typing up a post on LeetCode about this one:
https://leetcode.com/problems/first-missing-positive/discuss/202584/JavaScript-52ms-beats-100-(supposedly)
*/
