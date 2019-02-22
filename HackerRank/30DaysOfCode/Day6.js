/*
Given a string, S, of length N that is indexed
from 0 to N-1, print the even-indexed and odd-indexed
characters as 2 space-separated strings on a single
line.
*/

function processData(input) {
  input = input.split("\n");
  let numInput = input[0];
  let stringNum = 1;

  while (numInput > 0) {
    let string = input[stringNum];
    let even = "";
    let odd = "";
    let i = 0;
    while (i < string.length) {
      if (i === 0 || i % 2 === 0) {
        even += string[i];
      } else {
        odd += string[i];
      }
      i++;
    }
    console.log(even, odd);
    numInput--;
    stringNum++;
  }
}

/* Code provided */
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
