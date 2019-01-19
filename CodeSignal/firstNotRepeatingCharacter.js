/*
Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

Given a string s consisting of small English letters, find and return the first instance of a non - repeating character in it.If there is no such character, return '_'.

    Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non - repeating characters in the string: 'c' and 'd'.Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

    Input / Output

    [execution time limit]3 seconds(java)

    [input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non - repeating character in s, or '_' if there are no characters that do not repeat. */

function firstNonRepeatingCharacter(arr) {
  // a is 97
  let alph = new Array(26).fill(0);
  let index = new Array(26).fill(0);
  let first = Infinity;
  for (let i = 0; i < arr.length; i++) {
    alph[arr.charCodeAt(i) - 97]++;
    index[arr.charCodeAt(i) - 97] = i;
  }
  for (let i = 0; i < alph.length; i++) {
    if (alph[i] == 1) {
      if (index[i] < first) {
        first = index[i];
      }
    }
  }
  if (first != Infinity) {
    return arr[first];
  }
  return "_";
}

firstNonRepeatingCharacter("abacabad");
