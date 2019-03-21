/* Given two strings, return a boolean of whether
the strings are anagrams.  */

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    // If two empty strings are passed in, 
    // treat as though anagram
    if (string1.length === 0 && string2.length === 0) {
        return true;
    }
    let string1Chars = {};
    // initialize an object with letters as keys
    // if a letter is already in the object,
    // increment the value of the number associated
    // this creates a frequency table
    for (let i = 0; i < string1.length; i++) {
        if (string1Chars[string1[i]] === undefined) {
            string1Chars[string1[i]] = 1;
        } else {
            string1Chars[string1[i]]++;
        }
    }
    for (let i = 0; i < string2.length; i++) {
        // if a character in string2 is not in the seen
        // array, it means that it doesn't appear in 
        // string1, so they can't be anagrams
        if (string1Chars[string2[i]] === undefined) {
            return false;
        }
        string1Chars[string2[i]]--;
        // If there are more instances of a character
        // in string2 than in string1, they can't be
        // anagrams - early return
        if (string1Chars[string2[i]] < 0) {
            return false;
        }
    }
    // return false if the total sum of values in
    // string1 isn't 0 and true if it is
    return Object.values(string1Chars).reduce((total, current) => total + current) === 0;
}

console.log(isAnagram('fishcake', 'cakefish'));
console.log(isAnagram('cluster', 'rusterlc'));
console.log(isAnagram('dadad', 'dddaa'));
console.log(isAnagram('', ''));
