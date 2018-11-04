/* Write a function that splits an array (first argument) into groups 
the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let index = 0;
  let strings = [];
  while (index < arr.length) {
    let str = arr.slice(index, index + size);
    strings.push(str);
    index += size;
  }
  return strings;
}
