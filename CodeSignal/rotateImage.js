function rotateImage(arr) {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    for (let j = i; j < len - i - 1; j++) {
      let bucket = arr[i][j];
      arr[i][j] = arr[len - j - 1][i];
      arr[len - j - 1][i] = arr[len - i - 1][len - j - 1];
      arr[len - i - 1][len - j - 1] = arr[j][len - i - 1];
      arr[j][len - i - 1] = bucket;
    }
  }
  return arr;
}
