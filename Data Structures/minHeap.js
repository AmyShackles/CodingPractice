class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  add(val) {
    this.heap.push(val);
    this.size++;
    this.bubbleUp(this.size);
    
  }
  bubbleUp(index) {
    let parent =  Math.floor(index/2);
    if (parent > 0 && this.heap[parent] >= this.heap[index]) {
      [ this.heap[parent], this.heap[index] ] = [ this.heap[index], this.heap[parent] ];
      this.bubbleUp(parent);
    }
  }
  remove() {
    if (this.size > 0) {
      this.heap[1] = this.heap[this.size];
      this.size--;
      this.siftDown(1);
      return this.heap.pop();
    }
  }
  siftDown(index) {
    let leftChild = index * 2;
    let rightChild = index * 2 + 1;
    let minChild;
    if (this.heap[leftChild] !== undefined) {
      if (this.heap[rightChild] === undefined) {
        minChild = leftChild;
      } else if (this.heap[rightChild] !== undefined) {
        minChild = this.heap[leftChild] < this.heap[rightChild] ? leftChild : rightChild;
      }
      if (this.heap[index] > this.heap[minChild]) {
        [ this.heap[minChild], this.heap[index] ] = [ this.heap[index], this.heap[minChild] ];
      }
    }
  }
  getMin() {
    return this.heap[1];
  }
}

let minHeap = new MinHeap();
minHeap.add(5);
minHeap.add(2);
minHeap.add(7);
minHeap.add(3);
minHeap.add(5);
minHeap.remove()
console.log(minHeap.getMin());
console.log(minHeap)
