/*
Write code to partition a linked list around a value x such that all nodes with values less than x come before all nodes greater than or equal to x.  If x is contained within the list, the values of x only need to be after the elements less than x.  The partition element x can appear anywhere in the right partition - it does not need to appear between the right and left partitions

Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (partition=5)
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8 
*/

// First, find how many elements are fewer than partition?
// Reorganize in place?

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

function printList(list) {
  let current = list.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

function partitionLinkedList(list, partition) {
  let head = list.head;
  let tail = list.tail;
  let node = list.head;
  while (node !== null) {
    let next = node.next;
    if (node.value < partition) {
      node.next = list.head;
      list.head = node
    } else {
      list.tail.next = node;
      list.tail = list.tail.next
      tail.next = null;
    }
    node = next;
  }
  return list;
}

let list = new LinkedList();
list.add(6)
list.add(7)
list.add(8)
list.add(9)
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)

list.add(10)
printList(partitionLinkedList(list, 3))
