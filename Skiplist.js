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
        let random = Math.round(Math.random()) % 4;
    
        if (this.head === null) {
          this.head = new Node(value);
          this.storage.push(this.head);
          this.count++;
          this.tail = this.head;
          if (this.count % 3 === 0) {
            this.tail.below = this.tail
          }
        } else {
          this.tail.next = new Node(value);
          if (this.count % 3 === 0) {
            this.tail.below = this.tail.next;
          }
          this.tail = this.tail.next;
          this.storage.push(this.tail);
          this.count++;
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