/* Write code to remove duplicates from an unsorted linked list.
FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?
*/

class LinkedList {
  constructor(value) {
     this.value = value;
    this.next = null;
  }
}

function checkDuplications (head, node) {
  let currentNode = head;
  while (currentNode !== node) {
    if (currentNode.value === node.value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

function removeDuplicates (head) {
  let node = head;
  while (node !== null) {
    if (node.next !== null && checkDuplications(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
}

function printList (head) {
  let current = head;
  console.log('Start of linked list\n');
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  console.log('End of linked list')
}

function removeDuplications(list) {
  let current = list;
  let seen = {}
  seen[current.value] = current.value;

  while (current.next !== null) {
    prev = current;
    current = current.next;
    console.log('seen', seen)
    if (seen[current.value] !== undefined) {
      console.log('prev.next', prev.next, 'current', current, 'current.next', current.next)
      prev.next = current.next;
      current = prev;
      console.log('\nnew prev.next', prev.next, '\n')
    } else {
      seen[current.value] = current.value;
    }
  }
  return list;
}

let a = new LinkedList('a');
let b = new LinkedList('b');
let c = new LinkedList('c');
let d = new LinkedList('d');
let e = new LinkedList('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

let f = new LinkedList('a');
let g = new LinkedList('b');
let h = new LinkedList('d');
let i = new LinkedList('f');
let j = new LinkedList('g');
let k = new LinkedList('a');
let l = new LinkedList('b');
let m = new LinkedList('z');

e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = k;
k.next = l;
l.next = m;

printList(a);
printList(removeDuplications(a));
