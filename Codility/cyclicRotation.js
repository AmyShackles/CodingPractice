  function solution(A, K) {
  let i = 0;
  while (i < K) {
    for (let i = A.length - 1; i > 0; i--) {
      [ A[i-1], A[i] ] = [ A[i], A[i-1] ]
    }
    i++;
  }
  return A
}
