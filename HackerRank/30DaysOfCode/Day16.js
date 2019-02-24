/*
Read a string, S, and print its integer value.
If S cannot be converted to an integer,
print "Bad String".

Note: You must use the String-to-Integer and
exception handling constructs built into your
submission language.  If you attempt to use loops
or conditional statements, you will get a 0 score.
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

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

function main() {
  const S = readLine(); // this line was provided

  /* Start of code
  I actually had to look up hopw to implement
  this in JavaScript because NaN results don't
  generally throw an exception.  The only reason
  why it does when you try to create a new array
  using the value is that a number is needed
  to initialize the array length.  So a non-number
  value would throw an error.
*/

  const N = parseInt(S);
  try {
    new Array(N);
    console.log(N);
  } catch (err) {
    console.log("Bad String");
  }
}
