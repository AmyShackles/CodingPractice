class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new LinkedList(7);
let b = new LinkedList(1);
let c = new LinkedList(6);
let d = new LinkedList(5);
let e = new LinkedList(9);
let f = new LinkedList(2);

a.next = b;
b.next = c;

d.next = e;
e.next = f;

function printList(a) {
  let current = a;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  return a;
}

function sumLists(a, b) {
  let value = 0, last, list;
  
  while (a !== null && b !== null) {
    if (a) {
      value += a.value;
      a = a.next;
    }
    if (b) {
      value += b.value;
      b = b.next;
    }
    if (last) {
      // Performing the modulo operation gives you the digit in the ones place
      last.next = new LinkedList(value % 10);
      last = last.next;
    } else {
      // Start the return list, but initiate a new variable to walk through it - list is unchanged as it is a pointer to the head of the return list
      list = new LinkedList(value % 10);
      // Last is the pointer we're going to increment to create the list
      last = list;
    }
    // This makes the value at the top of the while include the carry
    value = value / 10 | 0;
  }
  return list;
}

sumLists(a, d)
