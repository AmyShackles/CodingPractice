class SkipNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.below = null;
    }
  }
  
  class SkipList {
    constructor() {
      this.storage = [];
      this.count = this.storage.length;
      this.head = null;
      this.tail = null;
    }
  
    add(value) {
      let random = Math.round(Math.random()) % 4;
  
      if (this.head === null) {
        this.head = new SkipNode(value);
        this.storage.push(this.head);
        this.count++;
        this.tail = this.head;
        this.tail.below = this.head;
      } else {
        this.tail.next = new SkipNode(value);
        if (this.count % 2 !== 0) {
          this.tail.below = this.tail.next;
        }
        this.tail = this.tail.next;
        this.storage.push(this.tail);
        this.count++;
      }
    }
    search(value) {
      let current = this.head.below;
      if (current.value === value) {
        return value;
      } else {
        while (current.next.value <= value) {
          if (current.next.value === value) {
            return current.next;
          }        
          current = current.next.below
        }
        while (current.next) {
          if (current.value === value) {
            return current;
          }
          console.log('second while', current.next)
          current = current.next;
        }
      }
      return null;
    }
  }
  
  
  let skiplist = new SkipList();
  for (let i = 1; i < 21474837; i++) {
    skiplist.add(i);
  }
  
  console.time("Skip list search");
  skiplist.search(2147832);
  console.timeEnd("Skip list search");