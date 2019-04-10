function mergeSort(arr) {
  let sorted = [];

  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return stitch(mergeSort(left), mergeSort(right));
}

function stitch(a, b) {
  let result = [];
  while (a.length && b.length) {
    if (a[0] <= b[0]) {
      result.push(a.shift());
    } else {
      result.push(b.shift());
   }
  }
  return result.concat(a, b);
}
mergeSort([10,2,12,5,18,26,3,4,5])
