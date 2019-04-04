/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0
*/
function zeroMatrix (matrix) {
  let position = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (position[i] !== undefined) {
          position[i].push(j);
        } else {
        position[i] = [j]
        }
      }
    }
  }
  let deletedRows = position;
  let deletedColumns = {};
  Object.values(position).map(a => deletedColumns[a] = a)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    if (deletedRows[i] !== undefined) {
      matrix[i][j] = 0;
    }
    if (deletedColumns[j] !== undefined) {
      matrix[i][j] = 0;
    }
  }
  }
  return matrix;
}
let test = [
  [7, 8, 2, 0, 12], 
  [9, 7, 12, 1, 5], 
  [0, 2, 7, 3, 2], 
  [11, 20, 1, 8, 7], 
  [7, 4, 0, 10, 12]
];
console.table(test)

zeroMatrix(test)
