/*

Declare a constant variable PI and assign it to the value of Math.PI
Read a number, r, from stdin
Use PI and r to calculate the area and perimeter of a circle with radius r.
Print area on one line
Print perimeter on next line 
*/

function main() {
  const PI = Math.PI;
  let r = readLine();
  let area = PI * Math.pow(r, 2);
  let perimeter = 2 * PI * r;
  console.log(area);
  console.log(perimeter);
}
