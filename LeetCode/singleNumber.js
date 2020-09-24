/* Given a non-empty array of integers, every element appears twice except for one.  Find and return the number that does not */

// Solution 1
function singleNumber(nums) {
    let count = {};
    nums.forEach(val => {
        if (count[val] !== undefined) {
            count[val]++;
        } else {
            count[val] = 1;
        }
    })
    return Object.entries(count).find(([key, value]) => {
        if (value !== 2) {
            return key
        }
    })[0]
}

// Solution 2
function singleNumber(nums) {
    let count = {};
    nums.forEach(val => {
        if (count[val] !== undefined) {
            delete count[val]
        } else {
            count[val] = 1;
        }
    })
    return Object.keys(count)[0]
}

// Favorite solution I found, explanation added by me
function singleNumber(nums) {
    /* Since we know that every value in the array appears twice
        except for the one we're looking for,
        if we remember that a number XOR 0 equals that number
        and that a number XOR itself equals 0,
        we can rely on this to know that if we XOR all of the
        values in the array with each other,
        the value we are left with will be the number
        that does not appear twice. */
    return nums.reduce((a, b) => a ^ b)
}
