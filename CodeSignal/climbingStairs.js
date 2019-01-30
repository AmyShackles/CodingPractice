/* You are climbing a staircase that has n steps. 
You can take the steps either 1 or 2 at a time. 
Calculate how many distinct ways you can climb to the top of the staircase.

Example

For n = 1, the output should be
climbingStairs(n) = 1;

For n = 2, the output should be
climbingStairs(n) = 2.

You can either climb 2 steps at once or climb 1 step two times. */
function climbingStairs(n) {
  let back2 = 0;
  let back1 = 1;
  let next;
  for (i = 1; i < n; i++) {
    next = back2 + back1;
    back2 = back1;
    back1 = next;
  }
  return back1 + back2;
}
