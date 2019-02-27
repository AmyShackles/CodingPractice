/* 
vowelsAndConsonants takes one parameter, a string, of lowercase English letters.
The function must:
- Print each vowel on a new line (a,e,i,o,u)
- Print each consonant on a new line in the same order as it appears in string
*/

function vowelsAndConsonants(s) {
    let vowels = {
        a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'
    }
    let consonants = []
    let i = 0;
    while (i < s.length) {
        if (vowels[s[i]] !== undefined) {
            console.log(s[i]);
        } else {
            consonants.push(s[i])
        }
        i++;
    }
    for (let i = 0; i < consonants.length; i++) {
        console.log(consonants[i]);
    }
}
