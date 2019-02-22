/* 
Given n names and phone numbers, assemble a phone book that maps friends' names
to their respective phone numbers.  You will then be given an unknown number of
names to query your phone book for.  For each name queried, print the associated
entry from your phone book on a new line in the form name=phoneNumber.  If an entry
for name is not found, print Not Found instead.
*/

function processData(input) {
  let phoneBook = {};
  input = input.split("\n");
  let numOfEntries = input[0];
  let entryNum = 1;
  while (numOfEntries > 0) {
    let entry = input[entryNum].split(" ");
    phoneBook[entry[0]] = entry[1];
    entryNum++;
    numOfEntries--;
  }
  while (entryNum < input.length) {
    if (phoneBook[input[entryNum]] !== undefined) {
      console.log(`${input[entryNum]}=${phoneBook[input[entryNum]]}`);
    } else {
      console.log("Not found");
    }
    entryNum++;
  }
}

/* Code provided */
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
