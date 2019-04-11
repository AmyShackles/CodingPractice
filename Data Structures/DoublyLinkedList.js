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
  remove(val) {
    let current = this.head;
    while (current.next !== null) {
      if (current.value === val) {
        if (current === this.head) {
          current = current.next;
          this.head = current;
          this.head.prev = null;
        } else if (current === this.tail) {
          let prev = current.prev;
          prev.next = current.next;
          current = current.prev;
          current.next = null;
        } else {
        let prev = current.prev;
        current = current.next;
        current.prev = prev;
        prev.next = current;
        }
      } else {
        current = current.next;
      }
    }
  }
  removeFirst(val) {
    let current = this.head;
    while (current.next !== null) {
      if (current.value === val) { 
        if (current === this.head) {
          current = current.next;
          this.head = current;
          this.head.prev = null;
        } else if (current === this.tail) {
          let prev = current.prev;
          prev.next = current.next;
          current = current.prev;
          current.next = null;
        } else {
        let prev = current.prev;
        current = current.next;
        current.prev = prev;
        prev.next = current;
        }
        break;
      } else {
        current = current.next;
      }
    }
  }
  count() {
    let count = 1;
    let current = this.head;
    while (current.next !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
  peek() {
    return this.tail.value;
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
doublyLinkedList.remove(7);

doublyLinkedList.print()
doublyLinkedList.printBackward();
