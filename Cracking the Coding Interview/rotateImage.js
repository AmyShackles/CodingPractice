function rotateImage(image) {
  let rotated = [];
  for (let i = 0; i < image.length; i++) {
    let currentRow = []
    for (let j = image.length - 1; j >= 0; j--) {
     currentRow.push(image[j][i])
    }
    rotated.push(currentRow)
  }
  return rotated;
}

let image = [
  [1, 2, 3, 4],
  [4, 3, 2, 1],
  [5, 6, 7, 8],
  [8, 7, 6, 5]
  ]
console.table(image)
console.table(rotateImage(image))

function inPlaceRotate(image) {
  // provided solution
  for (let layer = 0; layer < image.length / 2; layer++) {
    let first = layer;
    let last = image.length - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = image[first][i];
      image[first][i] = image[last-offset][first];
      image[last-offset][first] = image[last][last - offset];
      image[last][last - offset] = image[i][last];
      image[i][last] = top;
    }
  }
  return image;
}
inPlaceRotate(image)
