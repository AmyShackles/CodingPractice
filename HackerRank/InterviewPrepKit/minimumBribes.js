/**
 * Each element in the array represents a person
 * each number represents original placement
 * in the line.  Given that each person can only
 * bribe the person immediately in front of them
 * and can only bribe a maximum of two times,
 * calculate the minimum number of bribes that
 * took place in order to arrive at this array.
 * If the configuration is not possible, return
 * the string "Too chaotic"
 * @param {[number]} arr Array of indexes
 * @return {number} minimum number of bribes
 */


function minimumBribes(arr) {
    let count = 0;
    let index = arr.length - 1;
    while (index >= 0) {
        if (arr[index] !== index + 1) {
            let j = index - 1;
            while (j > index - 3) {
                if (arr[j] === index + 1) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    count++;
                    if (j + 1 === index) {
                        break;
                    } else {
                        j++;
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                        count++;
                        break;
                    }
                }
                j--;
            }
            if (j === index - 3) {
                return "Too chaotic";
            }
        }
        index--;
    }
    return count;
}