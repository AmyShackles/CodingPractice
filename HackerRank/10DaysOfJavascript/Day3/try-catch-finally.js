/*
Complete the reverseString function.  Perform the following actions:
- Try to reverse the string using split, reverse, and join methods
- If an exception is thrown, catch it and print the contents of the exception's message on a new line
- Print the string on a new line.  If no exception is thrown, then this should be a reversed string.
If an exception was thrown, this should be the original string.
*/

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch (err) {
        console.log(err.message);
    }
    console.log(s);
}
