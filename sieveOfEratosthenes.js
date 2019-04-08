function getPrimes(n) {
  let possible = [];
  for (let i = 2; i <= n; i++) {
    possible.push(i);
  }

  let i = 0;
  
  while (i < possible.length) {
    let current = possible[i];
    for (let j = i+1; j < possible.length; j++) {
      if (possible[j] % current === 0) {
        possible[j] = 0;
      }
    }
    i++;
  }
  let result = possible.filter(num => num > 0);
  return result;
}

getPrimes(500)
