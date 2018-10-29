/* Brute force implementation */

var twoSum = function(nums, target) {
  let i = 0;
  while (i < nums.length) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
    i++;
  }
};

/* Using an object to store the values to increase time efficiency */
function twoSum(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash[complement] !== undefined) {
      return [hash[complement], i];
    }
    hash[nums[i]] = i;
  }
}
