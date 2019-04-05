class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function isPalindrome (list) {
  let current = list;
  let last = findLast(list);
  while (current !== null) {
    if (current.value !== last.value) {
      return false;
    }
    current = current.next;
    console.log('\ncurrent', current);
    last = findLast(list);
    console.log('\nlast', last)
  }
  return true;
}

function findLast(a) {
  console.log('a', a)
  let b = a;
  while (a.next !== null) {
    b = a;
    a = a.next;
  }
  b.next = null;
  return a;
}
