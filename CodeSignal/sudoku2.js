/* 
Sudoku is a number - placement puzzle.The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub - grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above.Note that the puzzle represented by grid does not have to be solvable.

    Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
['.', '.', '6', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '1', '.', '.', '.', '.', '.', '.'],
['.', '6', '7', '.', '.', '.', '.', '.', '9'],
['.', '.', '.', '.', '.', '.', '8', '1', '.'],
['.', '3', '.', '.', '.', '.', '.', '.', '6'],
['.', '.', '.', '.', '.', '7', '.', '.', '.'],
['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
['.', '.', '.', '.', '6', '.', '.', '.', '.'],
['7', '1', '.', '.', '7', '5', '.', '.', '.'],
['.', '7', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '8', '3', '.', '.', '.'],
['.', '.', '8', '.', '.', '7', '.', '6', '.'],
['.', '.', '.', '.', '.', '2', '.', '.', '.'],
['.', '1', '.', '2', '.', '.', '.', '.', '.'],
['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column.Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

    Input / Output

    [execution time limit]4 seconds(js)

    [input] array.array.char grid

A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

[output] boolean

Return true if grid represents a valid Sudoku puzzle, otherwise return false. */

/* Version 1 */
function sudoku2(grid) {
  let squares = getSquares(grid);
  for (let i = 0; i < grid.length; i++) {
    if (
      !checkRow(grid[i]) ||
      !checkColumn(grid, i) ||
      !checkSquares(squares, i)
    ) {
      return false;
    }
  }
  return true;
}

function getSquares(grid) {
  let squareMap = {};
  let topIndex = "a".charCodeAt(0);
  let middleIndex = "d".charCodeAt(0);
  let bottomIndex = "g".charCodeAt(0);
  let index = 0;
  while (index < grid.length) {
    let topsquares = [];
    let middlesquares = [];
    let bottomsquares = [];
    for (let i = 0; i < 3; i++) {
      for (let j = index; j < index + 3; j++) {
        topsquares.push(grid[i][j]);
      }
    }
    for (let i = 3; i < 6; i++) {
      for (let j = index; j < index + 3; j++) {
        middlesquares.push(grid[i][j]);
      }
    }
    for (let i = 6; i < 9; i++) {
      for (let j = index; j < index + 3; j++) {
        bottomsquares.push(grid[i][j]);
      }
    }
    squareMap[String.fromCharCode(topIndex)] = topsquares;
    squareMap[String.fromCharCode(middleIndex)] = middlesquares;
    squareMap[String.fromCharCode(bottomIndex)] = bottomsquares;
    topIndex++;
    middleIndex++;
    bottomIndex++;
    index += 3;
  }
  let organized = [];
  organized.push(squareMap["a"]);
  organized.push(squareMap["b"]);
  organized.push(squareMap["c"]);
  organized.push(squareMap["d"]);
  organized.push(squareMap["e"]);
  organized.push(squareMap["f"]);
  organized.push(squareMap["g"]);
  organized.push(squareMap["h"]);
  organized.push(squareMap["i"]);
  return organized;
}

function checkRow(arr) {
  let seen = new Array(9).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != ".") {
      if (seen[arr[i] - 1] === 0) {
        seen[arr[i] - 1] = arr[i];
      } else {
        console.log("false in row");
        return false;
      }
    }
  }
  return true;
}

function checkColumn(arr, index) {
  let seen = new Array(9).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][index] != ".") {
      if (seen[arr[i][index] - 1] === 0) {
        seen[arr[i][index] - 1] = arr[i][index];
      } else {
        console.log("false in column");
        return false;
      }
    }
  }
  return true;
}

function checkSquares(arr, index) {
  let seen = new Array(9).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[index][i] != ".") {
      if (seen[arr[index][i] - 1] === 0) {
        seen[arr[index][i] - 1] = arr[index][i];
      } else {
        console.log("false in square");
        return false;
      }
    }
  }
  return true;
}

let grid = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."]
];

sudoku2(grid);

/* Version 2 */
function sudoku2(grid) {
  let squares = getSquares(grid);
  for (let i = 0; i < grid.length; i++) {
    if (
      !checkRow(grid[i]) ||
      !checkColumn(grid, i) ||
      !checkSquares(squares, i)
    ) {
      return false;
    }
  }
  return true;
}

function getSquares(grid) {
  let index = 0;
  let squares = [];
  while (index < grid.length) {
    let topsquares = [];
    let middlesquares = [];
    let bottomsquares = [];
    for (let i = 0; i < 3; i++) {
      for (let j = index; j < index + 3; j++) {
        topsquares.push(grid[i][j]);
      }
    }
    for (let i = 3; i < 6; i++) {
      for (let j = index; j < index + 3; j++) {
        middlesquares.push(grid[i][j]);
      }
    }
    for (let i = 6; i < 9; i++) {
      for (let j = index; j < index + 3; j++) {
        bottomsquares.push(grid[i][j]);
      }
    }
    squares[index] = topsquares;
    squares[index + 1] = middlesquares;
    squares[index + 2] = bottomsquares;
    index += 3;
  }
  return squares;
}

function checkRow(arr) {
  let seen = new Array(9).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != ".") {
      if (seen[arr[i] - 1] === 0) {
        seen[arr[i] - 1] = arr[i];
      } else {
        console.log("false in row");
        return false;
      }
    }
  }
  return true;
}

function checkColumn(arr, index) {
  let seen = new Array(9).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][index] != ".") {
      if (seen[arr[i][index] - 1] === 0) {
        seen[arr[i][index] - 1] = arr[i][index];
      } else {
        console.log("false in column");
        return false;
      }
    }
  }
  return true;
}

function checkSquares(arr, index) {
  let seen = new Array(9).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[index][i] != ".") {
      if (seen[arr[index][i] - 1] === 0) {
        seen[arr[index][i] - 1] = arr[index][i];
      } else {
        console.log("false in square");
        return false;
      }
    }
  }
  return true;
}

let grid = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."]
];

sudoku2(grid);
