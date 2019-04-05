/* 
Assume you have a method isSubstring which checks if one word is a substring of another.  Given two strings, s1 and s2, write code to check if s2 is a roatation of s1 using only one call to isSubstring
*/

// If you append the value of the first string to the value of the first string, you are accounting for every possible rotation point in the string, so testing against that string to discover whether or not the second string is a substring of it is a good way to check if they are rotations of each other - that's the reason the if statement is so important to the function

function isRotation(s1, s2) {
  if (s1.length === s2.length) {
    let s1s1 = s1 + s1;
    return isSubstring(s1s1, s2);
  }
  return false;
}



function isSubstring(s1, s2) {
  let regex = new RegExp(s2)
  return regex.test(s1)
}

isRotation('floating', 'ingfloat')
