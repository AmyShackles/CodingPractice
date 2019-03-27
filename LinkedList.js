class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
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
      if (this.head === null) {
        this.head = new Node(value);
        this.storage.push(this.head);
        this.count++;
        this.tail = this.head;
      } else {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.storage.push(this.tail);
        this.count++;
      }
    }
    search(value) {
      let current = this.head;
      if (current.value === value) {
        return current;
      } else {
        while (current.next) {
          if (current.value === value) {
            return current;
          }
          current = current.next;     
        }
      }
      return null;
    }
  }
  let linkedlist = new LinkedList();
  for (let i = 0; i < 21474837; i++) {
    linkedlist.add(i);
  }
  
  console.time("Linked list search");
  linkedlist.search(21474830);
  console.timeEnd("Linked list search");
  
  