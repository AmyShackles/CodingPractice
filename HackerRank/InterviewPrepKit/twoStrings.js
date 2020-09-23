/*
Given two strings, determine if they share a common substring.
A substring may be as small as one character.
*/

function twoStrings(s1, s2) {
    let string1 = {};
    for (let i = 0; i < s1.length; i++) {
        string1[s1[i]] = true;
    }
    for (let i = 0; i < s2.length; i++) {
        if (string1[s2[i]]) {
            return 'YES';
        }
    }
    return 'NO';
}