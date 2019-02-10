/* 
Some phone usage rate may be described as follows:

first minute of a call costs min1 cents,
each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
each minute after 10th costs min11 cents.
You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have? */

function phoneCall(min1, min2_10, min11, s) {
  let total = 0;
  if (s >= min1 && total == 0) {
    s -= min1;
    total++;
  }
  while (s >= min2_10 && total < 10) {
    s -= min2_10;
    total++;
  }
  while (s >= min11 && total >= 10) {
    s -= min11;
    total++;
  }
  return total;
}

phoneCall(2, 1, 2, 20);
