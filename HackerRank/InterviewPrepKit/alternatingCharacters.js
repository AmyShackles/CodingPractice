/*
Given a string containing As and Bs only, return the number of deletions
that need to take place to ensure no adjacent characters are the same
*/

function alternatingCharacters(s) {
    let prev = s[0]
    let numDeletions = 0;
    for (let i = 1; i < s.length; i++) {
        if (prev !== s[i]) {
            prev = s[i];
        } else {
            numDeletions++;
        }
    }
    return numDeletions;
}