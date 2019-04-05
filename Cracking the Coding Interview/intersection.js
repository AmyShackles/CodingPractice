class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function getCount(a) {
  let count = 0;
  while (a !== null) {
    a = a.next;
    count++;
  }
  return count;
}
function intersection(a, b) {
  let l1 = getCount(a);
  let l2 = getCount(b);

  let d = Math.abs(l1 - l2);
  if (l1 > l2) {
    return getIntersection(d, a, b);
  } else {
    return getIntersection(d, b, a);
  }
}

function getIntersection(length, a, b) {
  let current1 = a;
  let current2 = b;
  for (let i = 0; i < length; i++) {
    if (current1 === null) {
      return -1;
    }
    current1 = current1.next;
  }
  while (current1 !== null && current2 !== null) {
    if (current1 === current2) {
      return current1.val;
    }
    current1 = current1.next;
    current2 = current2.next;
  }
  return -1;
}


let list1 = new LinkedList(1);
let a = new LinkedList(1);
let b = new LinkedList(2);
let c = new LinkedList(3);
let d = new LinkedList(4);
let e = new LinkedList(5);
let f = new LinkedList(6);
let g = new LinkedList(1);
let h = new LinkedList(2);
let i = new LinkedList(3);
let j = new LinkedList(5);
let k = new LinkedList(8);
let l = new LinkedList(9);

list1.next = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

let list2 = new LinkedList(7);
list2.next = h;
h.next = i;
i.next = k;
k.next = d;

intersection(list1, list2)
