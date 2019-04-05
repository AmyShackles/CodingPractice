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

function deleteMiddle(value, list) {
  let current = list.head;
  if (current === null) {
    return "Error, empty linked list"
  } else {
    while (current.next !== null) {
      let prev = current;
      current = current.next;
      if (current.value === value) {
        prev.next = current.next;
      }
    }
  }
  return list;
}


function printList (list) {
  let current = list.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}
let list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)
list.add(7)
list.add(8)
list.add(9)
list.add(10)
printList(list)
deleteMiddle(5, list);
printList(list)
