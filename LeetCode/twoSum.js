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
