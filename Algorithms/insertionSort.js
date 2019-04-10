function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr.splice(i, 1);
        arr.splice(j, 0, temp[0])
      }
    }
  }
  return arr;
}
let array = [5,4,2,9,7,3,0,12]
insertionSort(array)
