/* Given two strings, write a method to decide if one is a permutation of the other
*/

function permutationCheck(a, b) {
  let seen = {};
  a.split('').forEach(char => {
    if (seen[char] !== undefined) {
      seen[char]++;
    } else {
      seen[char] = 1;
    }
  });
  b.split('').forEach(char => {
    if (seen[char] !== undefined) {
      seen[char]--;
    } else {
      seen[char] = 1;
    }
  })
  return Object.values(seen).reduce((total, current) => total + current) === 0
}

permutationCheck('memdo', 'emdom')
