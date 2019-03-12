function romanNumerals(num) {
  let romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];
  let number = "";
  let i;
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i][1]) {
      number += romanNumerals[i][0];
      num -= romanNumerals[i][1];
    }
  }
  return number;
}
romanNumerals(3339);

/* I originally solved this problem by putting
the conversion table into an object and using
a for...in loop.  While that solution passed all
the test cases given, I realized that there's no
built-in order to iterating over an object that way.
In order to ensure that the largest values were
evaluated first, I opted to change the function to
use a matrix instead.

*/
// Original solution:
function romanNumerals(num) {
    let romanNumerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let number = ""
    let i;
    for (i in romanNumerals) {
        while (num >= romanNumerals[i]) {
            number += i
            num -= romanNumerals[i];
        }
    }
    return number;
}