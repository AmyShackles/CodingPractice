/*

You have two numbers represented by a linked list where each node contains a single digit.  The digits are stored in reverse order such that the 1s digit is the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

Input: 7 -> 1 -> 6 + 5 -> 9 -> 2.  That is, 617 + 295
Output: 9 -> 1 -> 2.  That is 912
*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new LinkedList(7);
let b = new LinkedList(1);
let c = new LinkedList(6);
let d = new LinkedList(5);
let e = new LinkedList(9);
let f = new LinkedList(2);

a.next = b;
b.next = c;

d.next = e;
e.next = f;

function sumLists(a, b) {
  let first = a;
  let second = b;
  let newLinkedList = [];
  while (first !== null && second !== null) {
    newLinkedList.push(first.value + second.value)
    first = first.next;
    second = second.next;
  }
  for (let i = 0; i < newLinkedList.length - 1; i++) {
    if (newLinkedList[i] > 9) {
      console.log(newLinkedList[i])
      let diff = newLinkedList[i] - 10;
      newLinkedList[i] = new LinkedList(diff);
      newLinkedList[i+1]++;
    }
  }
  newLinkedList[newLinkedList.length - 1] = new LinkedList(newLinkedList[newLinkedList.length - 1])
  let length = newLinkedList.length - 1
  let returnLinkedList = newLinkedList[length];
  for (let i = length; i > 0; i--) {
    newLinkedList[i].next = newLinkedList[i-1];
  }
  return returnLinkedList;
}

function printList(a) {
  let current = a;
  while (current !== null) {
    current = current.next;
  }
}

printList(sumLists(a, d))

/* Refactor tiiiiiiime */
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new LinkedList(7);
let b = new LinkedList(1);
let c = new LinkedList(6);
let d = new LinkedList(5);
let e = new LinkedList(9);
let f = new LinkedList(2);

a.next = b;
b.next = c;

d.next = e;
e.next = f;

function sumLists(a, b) {
  let first = a;
  let second = b;
  let newLinkedList = [];
  while (first !== null && second !== null) {
    newLinkedList.push(first.value + second.value)
    first = first.next;
    second = second.next;
  }
  let linkedList = sumAndCarry(newLinkedList)
  console.log(linkedList)
  return linkify(linkedList);
}

function sumAndCarry(newLinkedList) {
  for (let i = 0; i < newLinkedList.length - 1; i++) {
    if (newLinkedList[i] > 9) {
      console.log(newLinkedList[i])
      let diff = newLinkedList[i] - 10;
      newLinkedList[i] = new LinkedList(diff);
      newLinkedList[i+1]++;
    }
  }
  newLinkedList[newLinkedList.length - 1] = new LinkedList(newLinkedList[newLinkedList.length - 1]);
  return newLinkedList;
}

function linkify(newLinkedList) {
  let length = newLinkedList.length - 1
  let returnLinkedList = newLinkedList[length];
  for (let i = length; i > 0; i--) {
    newLinkedList[i].next = newLinkedList[i-1];
  }
  return returnLinkedList
}

function printList(a) {
  let current = a;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  return a;
}

sumLists(a, d)

