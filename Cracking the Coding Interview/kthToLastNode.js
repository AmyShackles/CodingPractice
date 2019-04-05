class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(val) {
    if (this.head === null) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(val);
      this.tail = current.next;
    }
  }
}

function displayLinkedList(list) {
  let current = list;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

function kthToLastNode(k, list) {
  let current = list.head;
  let i = 0;
  let kth = current;
  while (kth !== null) {
    
    while (i < k) {
      kth = kth.next;
      i++;
    }
    kth = kth.next;
    current = current.next;
  }
  return current;
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);
list.add(10);
displayLinkedList(list.head)
console.log(list)

kthToLastNode(2, list)
