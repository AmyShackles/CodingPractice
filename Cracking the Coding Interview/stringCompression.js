/* 
Implement a method to perform basic string compression using the counts of repeated characters.  For example, the string aabccccaaa would become a2b1c5a3.  If the compressed string would not become smaller than the original string, your method should return the original string.  You can assume the string has only uppercase and lowercase letters(a-z).
*/
function stringCompression(str) {
  let newString = [];
  let i = 0;
  let current = str[0];
  while (i < str.length) {
    let count = 1;
    if (str[i+1] !== current) {
      newString.push(`${current}1`)
    }
    else {
      while (str[i+1] === current) {
        count++;
        i++;
      }
      newString.push(`${current}${count}`)
    }
    i++;
    count = 1;
    current = str[i];
  }
  return newString.join('')
}
stringCompression('aabcccccaaa')
