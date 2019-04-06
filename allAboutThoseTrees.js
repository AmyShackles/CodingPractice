class Queue {
  constructor() {
    this.queue = [];
  }
  add(val) {
    this.queue.push(val);
  }
  remove() {
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }
  add(val) {
    this.stack.push(val);
  }
  remove() {
    return this.stack.pop();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}



class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.meta = {};
    this.parent = null;
  }
  setLeftAndUpdateParent(node) {
    this.left = node;
    if (node) {
      node.parent = this;
    }
  }
  setRightAndUpdateParent(node) {
    this.right = node;
    if (node) {
      node.parent = this;
    }
  }
}


class BinarySearchTree {
    constructor() {
      this.root = null;
      this.size = 0;
    }
    add(value) {
      const newNode = new BinaryTreeNode(value);
      if (this.root) {
        const { found, parent } = this.findNodeAndParent(value);
        if (found) {
          found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
        } else if (value < parent.value) {
          parent.left = newNode;
        } else {
          parent.right = newNode;
        }
      } else {
        this.root = newNode;
      }
      this.size += 1;
      return newNode;
    }
    findNodeAndParent(value, node = this.root, parent = null) {
      if (!node || node.value === value) {
        return { found: node, parent };
      }
      if (value < node.value) {
        return this.findNodeAndParent(value, node.left, node);
      }
      return this.findNodeAndParent(value, node.right, node);
    }
    getRightMost(node = this.root) {
      if (!node || !node.right) {
        return node;
      }
      return this.getMax(node.right);
    }
    getLeftmost(node = this.root) {
      if (!node || !node.left) {
        return node;
      }
      return this.getMin(node.left);
    }
    remove(value) {
      const { found: nodeToRemove, parent } = this.findNodeAndParent(value);
      if (!nodeToRemove) return false;
      const removedNodeChildren = this.combineLeftIntoRightSubtree(nodeToRemove);
      if (nodeToRemove.meta.multiplicity && nodeToRemove.meta.multiplicity > 1) {
        nodeToRemove.meta.multiplicity -= 1;
      } else if (nodeToRemove === this.root) {
        this.root = removedNodeChildren;
        if (this.root) { this.root.parent = null; }
      } else if (nodeToRemove.isParentLeftChild) {
        parent.setLeftAndUpdateParent(removedNodeChildren);
      } else {
        parent.setRightAndUpdateParent(removedNodeChildren);
      }
      this.size -= 1;
      return true;
    }
    combineLeftIntoRightSubtree(node) {
      if (node.right) {
        const leftmost = this.getLeftmost(node.right);
        leftmost.setLeftAndUpdateParent(node.left);
        return node.right;
      }
      return node.left;
    }
    *inOrderTraversal(node = this.root) {
      if (node && node.left) { 
        yield *this.inOrderTraversal(node.left);
      }
      yield node;
      if (node && node.right) {
        yield *this.inOrderTraversal(node.right);
      }
    }
    *postOrderTraversal(node = this.root) {
      if (node && node.left) {
        yield *this.postOrderTraversal(node.left);
      }
      if (node && node.right) {
        yield *this.postOrderTraversal(node.right);
      }
      yield node;
    }
    *preOrderTraversal(node=this.root) {
      yield node;
      if (node  && node.left) {
        yield *this.preOrderTraversal(node.left);
      }
      if (node && node.right) {
        yield *this.preOrderTraversal(node.right);
      }
    }
    *dfs() {
      const stack = new Stack();
      stack.add(this.root);
      while (!stack.isEmpty()) {
        const node = stack.remove();
        yield node;
        if (node.right) { stack.add(node.right); }
        if (node.left) {
          stack.add(node.left);
        }
      }
    }
    *bfs() {
      const queue = new Queue();
      queue.add(this.root);
      while (!queue.isEmpty()) {
        const node = queue.remove();
        yield node;
        if (node.left) {
          queue.add(node.left);
        }
        if (node.right) {
          queue.add(node.right);
        }
      }
    }
  }

let bst = new BinarySearchTree();
root = bst.add(10);
n5 = bst.add(5);
n30 = bst.add(30);
n40 = bst.add(40);
n15 = bst.add(15);
n4 = bst.add(4);
n3 = bst.add(3);
console.log('Depth first')
let nodes = Array.from(bst.dfs()).map(node => node.value);
console.log(nodes)
console.log('Breadth first')
nodes = Array.from(bst.bfs()).map(node => node.value);
console.log(nodes);

console.log('Pre-order traversal')
nodes = Array.from(bst.preOrderTraversal()).map(node => node.value);
console.log(nodes);

console.log('In-order traversal')
nodes = Array.from(bst.inOrderTraversal()).map(node => node.value);
console.log(nodes);

console.log('Post-order traversal')
nodes = Array.from(bst.postOrderTraversal()).map(node => node.value);
console.log(nodes);
