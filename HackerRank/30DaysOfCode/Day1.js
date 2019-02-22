/* 
1. Declare 3 variables - 1 int, 1 double, 1 String
2. Read 3 lines of input from stdin and initialize your variables
3. Use the + operator to perform the following:
    1. Print the sum of i plus your int variable on a new line
    2. Print the sum of d plus your double variable to a scale 
        of one decimal place on a new line
    3. Concatenate s with the string you read as input and print
        the result on a new line
*/

/* Code provided */
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

// Reads complete line from STDIN
function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  // Declare second integer, double, and String variables.
  var int;
  var double;
  var stringVar;
  // Read and save an integer, double, and String to your variables.
  int = parseInt(readLine(), 10);
  double = parseFloat(readLine(), 10);
  stringVar = readLine();
  // Print the sum of both integer variables on a new line.
  console.log(i + int);
  // Print the sum of the double variables on a new line.
  console.log(Number.parseFloat(d + double).toFixed(1));
  // Concatenate and print the String variables on a new line
  console.log(s + stringVar);
  // The 's' variable above should be printed first.
}
