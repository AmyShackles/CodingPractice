/* 
Given a base-10 integer, convert it to binary (base 2).
Then find and print the base-10 integer denoting the 
maximum number of consecutive 1's in _n_'s binary representation
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
  /* Start of function I wrote */
  let binaryString = "";
  let num = n;
  while (num > 0) {
    binaryString = Math.floor(num % 2) + binaryString;
    num = Math.floor(num / 2);
  }
  let repetitionCount = 1;
  for (let i = 0; i < binaryString.length - 1; ) {
    let currentRepetition = 0;
    if (binaryString[i] === binaryString[i + 1]) {
      currentRepetition++;
      while (binaryString[i] === binaryString[i + 1]) {
        currentRepetition++;
        i++;
      }
      if (currentRepetition > repetitionCount) {
        repetitionCount = currentRepetition;
      }
    }
    i++;
  }
  console.log(repetitionCount);
}
