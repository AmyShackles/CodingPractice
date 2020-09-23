/* 
Given a string, find the number of pairs of substrings of the string
that are anagrams of each other.
*/

// Solution 1
function getSubstrings(s) {
    let substrings = []
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            substrings.push(s.slice(i, j))
        }
    }
    return substrings.map(val => [...val].sort().join('')).sort()
}
function sherlockAndAnagrams(s) {
    let pairs = []
    let substrings = getSubstrings(s)
    for (let i = 0; i < substrings.length; i++) {
        for (let j = i + 1; j < substrings.length; j++) {
            if (substrings[i] === substrings[j]) {
                pairs.push([substrings[i], substrings[j]])
            }
        }
    }
    return pairs.length;
}

// Solution 2
function sherlockAndAnagrams(s) {
    let count = 0;
    let found = {};

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substr = [...s.slice(i, j)].sort().join('');
            if (found[substr] === undefined) {
                found[substr] = 1;
            } else {
                count += found[substr];
                found[substr]++;
            }
            
        }
    }
    return count;
}