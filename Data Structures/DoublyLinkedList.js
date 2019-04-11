class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(val) {
    if (this.head === null) {
      this.head = new Node(val);
      this.tail = this.head;
    }
    else {
      this.tail.next = new Node(val);
      let temp = this.tail;
      this.tail = this.tail.next;
      this.tail.prev = temp;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  printBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(7);
doublyLinkedList.add(5);
doublyLinkedList.add(6);
doublyLinkedList.add(12)
doublyLinkedList.add(17);
doublyLinkedList.add(12);
doublyLinkedList.add(7);
doublyLinkedList.add(14);

doublyLinkedList.print()
doublyLinkedList.printBackward();
