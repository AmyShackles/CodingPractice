/* 
Given an array, a, of size n distinct elements,
sort the array in ascending order using
the Bubble Sort algorithm above.  Once sorted,
print the following 3 lines:
1.  Array is sorted in numSwaps swaps.
2.  First Element: firstElement
3.  Last Element: lastElement
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

function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);

  /* My coding begins */
  let numSwaps = 0;
  for (let i = 0; i < n; i++) {
    let currentSwaps = 0;
    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        currentSwaps++;
      }
    }
    if (currentSwaps == 0) break;
    else numSwaps += currentSwaps;
  }
  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}
