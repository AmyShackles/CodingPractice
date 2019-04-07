class Stack {
  constructor() {
    this.stack = [];
    this.lastIndex = -1;
  }
  push (val) {
    this.stack.push(val);
    this.lastIndex++;
  }
  pop() {
    if (this.lastIndex > -1) {
      this.lastIndex--;
      return this.stack.pop();
    }
    else {
      return "I don't have anything else to give!"
    }
  }
  peek() {
    if (this.lastIndex > -1) {
      return this.stack[this.lastIndex];
    } else {
      return "No matter what you say, there is no data in my array"
    }
  }
  isEmpty() {
    return this.lastIndex === -1;
  }
}

let stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(8);
stack.push(12);
console.log(stack.stack) // expect [3, 5, 8, 12]
console.log(stack.pop()) // expect 12
console.log(stack.peek()) // expect 8
console.log(stack.stack) // expect [3, 5, 8]
stack.pop();
stack.pop();
console.log(stack.isEmpty()) // expect false
stack.pop();
stack.isEmpty() // expect true
console.log(stack.pop()) // expect I don't have anything else to give!
console.log(stack.peek()) // expect No matter what you say, there is no data in my array
