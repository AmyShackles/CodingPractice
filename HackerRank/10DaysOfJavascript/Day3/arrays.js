/*
Complete the getSecondLargest function that takes an array of numbers as a parameter.
The function must find and return the second largest number in the array.
*/
function getSecondLargest(nums) {
    // Complete the function
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            if (largest > secondLargest) {
                secondLargest = largest;
            }
                largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] !== largest) {
                    secondLargest = nums[i];
                }
        
    }
    return secondLargest;
}
