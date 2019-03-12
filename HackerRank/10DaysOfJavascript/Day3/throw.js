/*
Complete the isPositive function.
If the value of the integer passed into the function is positive, return 'YES'
Otherwise throw an Error according to the following rules:
- If it is 0, throw an Error with message = Zero Error
- If it is negative, throw an Error with message = Negative Error 
*/

function isPositive(a) {
    if (a > 0) return "YES";
    if (a === 0) throw new Error("Zero Error");
    if (a < 0) throw new Error("Negative Error");
}
