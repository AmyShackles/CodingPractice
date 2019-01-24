/* Current solution */
function balancedBrackets(string) {
  let open = { "[": "]", "{": "}", "(": ")" };
  let stack = [];
  let close = { "}": "{", "]": "[", ")": "(" };
  if (close[string[0]] || string.length < 2) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (open[string[i]] === undefined && close[string[i]] === undefined) {
      break;
    }
    if (open[string[i]]) {
      stack.unshift(open[string[i]]);
    } else {
      if (string[i] !== stack.shift()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

/* Original code written sometime in the past I'd rather not think about */

function balancedBrackets(str) {
  let string = str.slice();
  console.log(string);
  let open = ["(", "{", "["];
  let closed = [")", "}", "]"];

  for (let i = 0; i < string.length; i++) {
    if (
      string[0] === closed[0] ||
      string[0] === closed[1] ||
      string[0] === closed[3]
    ) {
      return false;
    }
    if (string[i] === open[0] && string[string.length - i + 1] !== closed[0]) {
      if (string[i] === open[0] && string[i + 1] !== closed[0]) {
        if (string[i] === open[0] && string.indexOf(closed[0]) % 2 !== 0) {
          return false;
        }
      }
    }
    if (string[i] === open[1] && string[string.length - i + 1] !== closed[1]) {
      if (string[i] === open[1] && string[i + 1] !== closed[1]) {
        if (string[i] === open[1] && string.indexOf(closed[1]) % 2 !== 0) {
          return false;
        }
      }
    }
    if (string[i] === open[3] && string[string.length - i + 1] !== closed[3]) {
      if (string[i] === open[3] && string[i + 1] !== closed[3]) {
        if (string[i] === open[3] && string.indexOf(closed[3]) % 2 !== 0) {
          return false;
        }
      }
    }
  }
  return true;
}
