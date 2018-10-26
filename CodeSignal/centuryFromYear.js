/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
*/

function centuryFromYear(year) {
  // Split the year into a string in order to access different units
  // Turn it into an array with split in order to splice later
  let y = year.toString().split("");
  let next = false;
  // if the length of the array is less than or equal to 2, it will be in the 1st century
  if (y.length <= 2) {
    return 1;
  }
  // if the length of the array is greater than 2,
  // if the value at the last index is greater than zero, 'next' = true
  if (y.length > 2 && y[y.length - 1] > 0) {
    next = true;
    // else if the length of the array is greater than 3,
    // if the value at the second to last index is greater than zero,
    // 'next' = true
  } else if (y.length >= 3 && y[y.length - 2] > 0) {
    next = true;
  }
  // remove the last 2 numbers from the array
  y.splice(y.length - 2);
  // century is now the leftover numbers at the start of the array
  // join those numbers together to make the century
  century = y.join("");
  // if next is true, convert century to a number, add one, and return
  if (next) {
    return Number(century) + 1;
  }
  // else, return century converted to a number
  return Number(century);
}

// Looking at it again, I believe century on line 35 could instead be:
// century = Number(y.join(''));
// This would negate the need to convert it to a Number in both lines 38 and 41

centuryFromYear(2330); // 24
centuryFromYear(1); // 1
centuryFromYear(2000); // 20
centuryFromYear(201); // 3
centuryFromYear(220); // 3
centuryFromYear(2005); //

/* In retrospective, I feel stupid because this could have easily been solved with .... */
function centuryFromYear(year) {
  return Math.ceil(year / 100);
  // (because a century is 100 years and if there was any remainder, it would push it into the next century,
  // so you would want to round to the next integer if there were a remainder)
}
