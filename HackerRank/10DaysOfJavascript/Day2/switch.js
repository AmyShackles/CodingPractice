/* 
Complete the getLetter(s) function.  It has one parameter, a string, s, consisting of English lowercase letters.

- If the first character is in the set {a, e, i, o, u}, return A
- If the first character is in the set {b, c, d, f, g}, return B
- If the first character is in the set {h, j, k, l, m}, return C
- If the first character is in the set {n, p, q, r, s, t, v, w, x, y, z} return D
*/

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = 'D';
            break;
    }
    return letter;
}
