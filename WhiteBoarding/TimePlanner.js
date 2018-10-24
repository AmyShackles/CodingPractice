/* Implement a time planner that receives the availability of two people
    and a duration.
    The time planner should return the earliest time slot that matches the given
    duration where both people have availability.  If there is no common time slot
    that satisfies these requirements, return an empty array.

    Each person's availability will be an array of two-element arrays.  Each two-element
    array's first element represents the start time of a time slot, and the second array
    element represents the end time of that time slot.  The input variable duration is a 
    positive integer that represents the duration of a meeting in seconds.  The output
    should be an array with the appropriate start time and end time that meets all of the
    requirements.

    Analyze the time and space complexity of your solution.

    Examples: 

    input:  a = [[10, 50], [60, 120], [140, 210]]
            b = [[0, 15], [60, 70]]
            duration = 8
    output: [60, 68]

    input:  a = [[10, 50], [60, 120], [140, 210]]
            b = [[0, 15], [60, 72]]
            duration = 12
    output: [60, 72]

    input:  a = [[10, 50], [60, 120], [140, 210]]
            b = [[0, 15], [60, 70]]
            duration = 12
    output: [] // since there is no common slot

    These example inputs are obviously not realistic input numbers for representing meeting times. 
    Ideally the inputs would consist of Unix epoch timestamps, 
    but those are very large numbers to have to type out over and over again, 
    so we're just going to fake that part. 
    If your function works with these faux inputs, it will work just fine with Unix timestamps.
*/

function timePlanner(a, b, duration) {
  let aCount = 0; // index for array a
  let bCount = 0; // index for array b

  while (aCount < a.length && bCount < b.length) {
    // while the index for a is less than length of array a &&
    // while the index for b is less than the length of array b
    let start = Math.max(a[aCount][0], b[bCount][0]);
    // let start equal the higher start time between array a & array b
    let end = Math.min(a[aCount][1], b[bCount][1]);
    // let end equal the lower end time between array a & array b
    if (start + duration <= end) {
      // if start time plus duration is less than or equal to the end time,
      // return an array that is start time, end time
      return [start, start + duration];
    } else {
      if (aCount > bCount) {
        // if the index of a is greater than the index of b, increment index of b
        bCount++;
      } else {
        // else, increment the index of a
        aCount++;
      }
    }
  }
  // if the while loop returns no suitable time range, return an empty array
  return [];
}

timePlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 72]], 12);
timePlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8);
