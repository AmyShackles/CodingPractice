function oneWayFlight(arr) {
  let start = "";
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == null) {
      start = arr[i][1];
    }
    map[arr[i][0]] = arr[i][1];
  }
  let result = [];
  let j = 0;
  result.push(start);
  while (result.length < arr.length - 1) {
    result.push(map[result[j]]);
    j++;
  }
  return result;
}

const tickets = [
  ["PIT", "ORD"],
  ["XNA", "CID"],
  ["SFO", "BHM"],
  ["FLG", "XNA"],
  [null, "LAX"],
  ["LAX", "SFO"],
  ["CID", "SLC"],
  ["ORD", null],
  ["SLC", "PIT"],
  ["BHM", "FLG"]
];

oneWayFlight(tickets);
