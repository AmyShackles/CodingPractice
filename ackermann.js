function ackermann(m, n) {
  let answer;
  if (m === 0) {
    answer = n+1;
  } else if (n === 0) {
    answer = ackermann(m-1, 1);
  } else {
    answer = ackermann(m-1, ackermann(m, n-1));
  }
  return answer;
}

function main() {
  i = 5;
  j = 0;
  console.log(`Ackermann ${i},${j} is: ${ackermann(i, j)}`)
}

main();
