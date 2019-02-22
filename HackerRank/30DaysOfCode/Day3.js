/*
Given an integer, n, perform the following conditional actions:
- if n is odd, print 'Weird'
- if n is even and in the inclusive range of 2 to 5, print 'Not weird'
- if n is even and in the inclusive range of 6 to 20, print 'Weird'
- if n is even and greater than 20, print 'Not weird'
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

/*
Task
Given an integer, , perform the following conditional actions:

If  is odd, print Weird
If  is even and in the inclusive range of 2 to 5, print Not Weird
If  is even and in the inclusive range of 6 to 20, print Weird
If  is even and greater than 20, print Not Weird
Complete the stub code provided in your editor to print whether or not  is weird.
*/

function main() {
  const N = parseInt(readLine(), 10);

  /* Start of my function */
  if (N % 2 !== 0) console.log("Weird");
  if (N % 2 == 0) {
    if (N >= 2 && N < 5) console.log("Not Weird");
    else if (N >= 6 && N <= 20) console.log("Weird");
    else if (N > 20) console.log("Not Weird");
    else console.log("Not Weird");
  }
}
