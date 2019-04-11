function solution(A) {
    let seen = {};
    for (let i = 0; i < A.length; i++) {
        if (seen[A[i]] !== undefined) {
            seen[A[i]]++;
        } else {
            seen[A[i]] = 1;
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (seen[A[i]] % 2 !== 0) {
            return A[i];
        }
    }
}
