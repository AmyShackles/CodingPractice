/*
Given two strings, a and b, that may or may not be the same length, 
determine the minimum number of character deletions required to
make a and b anagrams.  Any characters can be deleted from either
of the strings.

Constraints:
1 <= [a], [b] <= 10^4
The strings a and b consist of lowercase English alphabetic letters
*/

// Solution 1: Sort and count differences
function makeAnagram(a, b) {
    a = [...a].sort();
    b = [...b].sort();
    console.log(a, b)
    let deleteCount = 0;
    let aIndex = 0, bIndex = 0;
    while (aIndex < a.length && bIndex < b.length) {
        if (a[aIndex] !== b[bIndex]) {
            deleteCount++;
            if (a[aIndex] < b[bIndex]) {
                aIndex++;
            } else {
                bIndex++;
            }
        } else {
            aIndex++;
            bIndex++;
        }
    }
    if (aIndex < a.length) {
        deleteCount += (a.length - aIndex);
    } else if (bIndex < b.length) {
        deleteCount += (b.length - bIndex);
    }
    return deleteCount;
}

// Solution 2 - Keep track of frequencies with alphabet array
function makeAnagram(a, b) {
    let count = 0;
    let freq = Array(26).fill(0);
    for (let i = 0; i < a.length; i++) {
        freq[a.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for (let i = 0; i < b.length; i++) {
        freq[b.codePointAt(i) - 'a'.codePointAt(0)]--;
    }
    freq.forEach(val => count += Math.abs(val));
    return count;
}