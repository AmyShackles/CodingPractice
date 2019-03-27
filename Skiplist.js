class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.below = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.storage = [];
      this.count = this.storage.length;
      this.head = null;
      this.tail = null;
    }
  
    add(value) {
      let random = Math.floor(Math.random() * 2);
  
  
      if (this.head === null) {
        this.head = new Node(value);
        this.storage.push(this.head);
        this.tail = this.head;
      } else {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.storage.push(this.tail);
      }
      if (random) {
        this.tail.below = this.tail;
      }
    }
  
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  let d = 4;
  let list = new LinkedList();
  list.add(a);
  list.add(b);
  list.add(c);
  list.add(d);
  console.table(list)
  