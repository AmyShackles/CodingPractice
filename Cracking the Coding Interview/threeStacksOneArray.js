
class StackHolder {
  constructor(capacity) {
    this.stacks = [[]];
    this.currentIndex = 0;
    this.capacity = capacity
  }
  size() {
    return this.currentIndex + 1;
  }
  push(item) {
    if (this.stacks[this.currentIndex].length < this.capacity) {
      this.stacks[this.currentIndex].push(item);
    }
    else {
      this.stacks.push([]);
      this.currentIndex++;
      this.stacks[this.currentIndex].push(item);
    }
  }
  pop() {
    if (this.stacks[this.currentIndex].length == 0) {
      this.currentIndex--;
    }
    return this.stacks[this.currentIndex].pop();
  }
  popStack(stack) {
    if (this.stacks[this.currentIndex].length == 0) {
      this.currentIndex--;
    }
    if (this.currentIndex > stack && this.stacks[this.currentIndex].length > 0) {
        let move = this.stacks[stack+1].splice(0, 1)[0]
        this.stacks[stack][this.capacity - 1] = move;
        stack++;
        while (stack < this.currentIndex) {
          let spaces = this.capacity - this.stacks[stack].length;
          if (spaces > 0 && this.stacks[stack+1].length > 0) {
            move = this.stacks[stack+1].splice(0,1)[0];
            this.stacks[stack][this.capacity - 1] = move;
          }
        stack++;
        }
      }
    }
}




let stacks = new StackHolder(3);
stacks.push(1); // stack0
stacks.push(2); // stack0
stacks.push(4); // stack0
stacks.push(4); // stack1
stacks.push(14); // stack1
stacks.push(5); // stack1
stacks.push(6) // stack3
stacks.push(7) // stack3
stacks.popStack(1);
stacks.popStack(0);
stacks.popStack(0);

console.log(stacks)
