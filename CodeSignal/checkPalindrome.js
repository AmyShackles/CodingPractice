/* Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
*/

function checkPalindrome(inputString) {
  // initialize a variable i to start at the beginning of the string
  // initialize a variable j to start at the end of the string
  for (
    let i = 0, j = inputString.length - 1;
    i < inputString.length;
    i++, j--
  ) {
    // if the character at i is the same as the character at j, continue
    if (inputString[i] === inputString[j]) {
      continue;
    } else {
      // else, if j - i is greater than 1, we know that it's not a palindrome
      // I did j - i because j starts at the end of the array and should be the highest
      // of the two, value-wise
      if (j - i !== 1) {
        return false;
      }
    }
  }
  // if it's gotten this far and hasn't returned false, it must be true
  return true;
}

checkPalindrome("abba");
checkPalindrome("nada");
checkPalindrome("aaaaattaaaaa");
