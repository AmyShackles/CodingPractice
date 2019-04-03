/* 
Write a method to replace all spaces in a string with %20
*/
function urlifyWithRegex(str) {
  return str.replace(/\ /gm, '%20');
}

console.log(urlifyWithRegex(`Something wicked this way comes\nsomewhere in the distance\nwho are you, who who, who who`))

function urlifyWithoutRegex(str) {
  let returnString = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      returnString.push('%20')
    } else {
      returnString.push(str[i])
    }
  }
  return returnString.join('')
}

urlifyWithoutRegex('Something wicked this way comes')
