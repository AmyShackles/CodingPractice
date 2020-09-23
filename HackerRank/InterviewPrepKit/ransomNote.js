/*
Given two arrays of strings, print 'Yes' if the strings in the
second array can be formed using the strings from the first array
*/

function checkMagazine(magazine, note) {
    let counts = {};
    magazine.forEach(word => {
        if (counts[word] !== undefined) {
            counts[word]++;
        } else {
            counts[word] = 1;
        }
    })
    let i = 0;
    while (i < note.length && counts[note[i]]) {
        if (counts[note[i]] && counts[note[i]] > 0) {
            counts[note[i++]]--;
        }
    }
    if (i === note.length) {
        console.log('Yes');
    } else {
        console.log('No')
    }
}