class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }
  add(val) {
    this.queue.push(val);
    this.length++;
  }
  pop() {
    if (this.length > 0) {
      this.length--;
      return this.queue.shift();
    } else {
      return "I have nothing to give"
    }
  }
  peek() {
    if (this.length > 0) {
      return this.queue[0]
    } else {
      return "No matter what you say, I have only an empty array"
    }
  }
  isEmpty() {
    return this.length === 0;
  }
}

let queue = new Queue();
queue.add(1);
queue.add(5);
queue.add(7);
queue.add(10);
queue.add(2);
queue.add(12);
console.log(queue.queue) // Expect [1, 5, 7, 10, 2, 12]
console.log(queue.pop()) // Expect 1
console.log(queue.queue) // Expect [5, 7, 10, 2, 12]
console.log(queue.peek()) // Expect 5
console.log(queue.isEmpty()) // Expect false
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
console.log(queue.isEmpty()) // Expect true
console.log(queue.peek()) // Expect No matter what you say I am only an empty array
console.log(queue.pop()) // Expect I have nothing left to give
