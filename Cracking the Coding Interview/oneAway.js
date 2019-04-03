/*
There are three types of edits that can be performed on strings - insert a character, remove a character, or replace a character.  Given two strings, write a function to check if they are one edit (or zero edits) away 
*/
// function oneAway(a, b) {
//   if (a.length === b.length) {
//     return oneEditReplace(a, b);
//   }
//   switch(true) {
//     case a.length === b.length:
//       return oneEditReplace(a, b);
//     case a.length + 1 === b.length:
//     case b.length - 1 === a.length:
//       return oneEditInsertDel(a, b);
//     case a.length - 1 === b.length:
//     case b.length + 1 === a.length:
//       return oneEditInsertDel(b, a);
//     default:
//       return false;
//   }
// }
// function oneEditReplace(a, b) {
//   let difference = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       difference++;
//     }
//   }
//   return difference <= 1;
// }
// function oneEditInsertDel(a, b) {
//   a = a.split('')
//   let difference = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (a[i] !== b[i]) {
//       difference++;
//       a.splice(i, 0, b[i]);
//       if (a.join('') !== b) {
//         return false;
//       }
//     }
//   }
//   return difference <= 1;
// }
// oneAway('catta', 'cata')
// // 

function oneEdit(a, b) {
  let difference = 0;
  let aIndex = 0;
  let bIndex = 0;
  if (a.length > (b.length + 1) || b.length > (a.length + 1)) {
    return false;
  }
  while (aIndex < a.length && bIndex < b.length) {
    if (difference > 1) return false;
    if (a[aIndex] !== b[bIndex]) {
      difference++;    
      if (aIndex !== bIndex) {
        return false;
      } else if (a.length === b.length) {
        aIndex++;
        bIndex++;
      } else {
      b.length > a.length ? bIndex++ : aIndex++;
      }
    } else {
      aIndex++;
      bIndex++;
    }
  }
  return true;
}

oneEdit('coda', 'cada')
