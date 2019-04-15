function repeatedString(s, n) {
  let multi = 0;
  let overrun = 0;
  let stringCut = ""
  
  if (n % s.length === 0) {
    multi = Math.floor(n/s.length);
  }
    else {
      multi = Math.floor(n/s.length);
      overrun = n % s.length;
      stringCut = s.slice(0, overrun);
    }
  let additional = testString(stringCut);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      count++;
    }
  }
  return (multi * count) + additional;
}

function testString(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      count++;
    }
  }
  return count;
}

repeatedString("gfcaaaecbg", 547602)
