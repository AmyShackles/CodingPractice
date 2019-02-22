/* 
Given an array, A, of N integers,
print A's elements in reverse order as 
as single line of space-separated numbers
*/

/* Code provided */
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  /* Where my code starts */
  let swap = n - 1;
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    if (string === "") {
      string += arr[swap];
    } else {
      string += " " + arr[swap];
    }
    swap--;
  }
  console.log(string);
}
