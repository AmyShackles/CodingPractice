/* Below we define an n-interesting polygon.  
    Your task is to find the area of a polygon for a given n.

    A 1-interesting polygon is just a square with a side of length 1.
    An n-intersting polygon is obtained by taking n - 1-interesting polygon and
    appending 1-interesting polygons to its rim, side by side.
    You can see 1-, 2-, 3-, and 4- interesting polygons in the picture below.

    Example
    For n = 2, the output should be shapeArea(n) = 5;
    For n = 3, the output should be shapeArea(n) = 13;
*/

// Solution 1: If you do not need shapeArea(n-1), etc solutions
function shapeArea(n) {
  // Start with a base case.  shapeArea(1) is supposed to equal 1
  // So this is a good starting point
  let start = 1;
  // From here, we can run a loop to solve for the current n and add the results
  // of n-1 until we get to the base case
  while (n > 1) {
    start += 4 * --n;
  }
  return start;
}

shapeArea(5);

// Solution 2: If you want to have access to the solution to shapeArea(n-1), shapeArea(n-2), etc.
function shapeArea(n) {
  // n = 2, shapeArea(2) should be 5
  // n = 3, shapeArea(3) should be 13
  let start = 1;
  let i = 0;
  // start at this point represents our base case
  // If shapeArea(1) were to run, the result would be 1
  while (n > i) {
    // it's important to set a limit on the while loop so it doesn't
    // result in a stack overflow
    // You can initialize a variable i at 0 and have it increment until
    // it reaches n, which would be solving for the previous n's in order
    console.log((start += 4 * ++i));
    // add 4 times preincremented i to the base case
    // - This allows us effectively solve for the previous 'n's
    // and build on them
  }
  return start;
}

shapeArea(4);
