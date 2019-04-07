class Heap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  add(value) {
    this.heap.push(value);
    this.size++;
    this._bubble_up(this.size);
  }
  remove() {
    this.heap[1] = this.heap[this.size];
    this.size--;
    this.heap.pop();
    this._sift_down(1);
  }
  get_min() {
    return this.heap[1];
  }
  get_size() {
    return this.size;
  }
  _bubble_up(index) {
    let parent = Math.floor(index / 2);
      if (parent > 0 && this.heap[parent] < this.heap[index]) {
        [ this.heap[parent], this.heap[index] ] = [ this.heap[index], this.heap[parent] ]
      }
      index = parent;
  }
  _sift_down(index) {
    let leftChild = index * 2;
    while (leftChild <= this.size) {
    let max_child = this._max_child(index);
    if (this.heap[index] < this.heap[max_child]) {
     [ this.heap[index], this.heap[max_child] ] = [ this.heap[max_child], this.heap[index] ]
    } else {
      break;
    }
    index = max_child;
  }
  }
  _max_child(index) {
    let rightChild = index * 2 + 1;
    let leftChild = index * 2;
    if (rightChild > this.size) {
      return leftChild;
    } else {
      if (this.heap[leftChild] > this.heap[rightChild]) {
        return leftChild;
      } else {
        return rightChild;
      }
    }
  }
}

let heap = new Heap();
heap.add(7)
heap.add(8);
heap.add(10);
heap.add(9);
heap.add(1);
heap.add(9);
heap.remove();
console.log(heap)

function isHeap(heap) {
  for (let i = 1; i <= Math.floor(heap.length - 1/2); i++) {
    if (heap[2 * i + 1] > heap[i]) {
      return false;
    }
    if (2 * i + 2 < heap.length && heap[2 * i + 2] > heap[i]) {
      return false;
    }
  }
  return true;
}

isHeap(heap.heap);
