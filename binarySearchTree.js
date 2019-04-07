class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // add(value) {
  //   let newNode = new TreeNode(value);
  //     if (value < this.value) {
  //       if (this.left === null) {
  //         this.left = newNode;
  //       } else {
  //         this.left.findPlace(this.left, newNode);
  //       }
  //     } else {
  //       if (this.right === null) {
  //         this.right = newNode;
  //       } else {
  //         this.right.findPlace(this.right, newNode);
  //       }
  //     }
  // }
  // findPlace(node, newNode) {
  //   if (newNode.value < node.value) {
  //     if (node.left !== null) {
  //       node.left.findPlace(node.left, newNode)
  //     } else {
  //       node.left = newNode;
  //     }
  //   } 
  //   else {
  //     if (node.right !== null) {
  //       node.right.findPlace(node.right, newNode)
  //     } else {
  //       node.right = newNode;
  //     }
  //   }
  // }
    add(value) {
    let newNode = new TreeNode(value);
    if (newNode.value < this.value) {
      if (this.left !== null) {
        this.left.add(value);
      } else {
        this.left = newNode;
      }
    } 
    else {
      if (this.right !== null) {
        this.right.add(value)
      } else {
        this.right = newNode;
      }
    }
  }
  printTree() {
    if (this === null) {
      return;
    }
    if (this.left) {
      console.log(this.left);
      this.left.printTree()
    }
    console.log(this);
    if (this.right) {
      console.log(this.right);
      this.right.printTree();
    }
  }
}

let tree = new TreeNode(7)
tree.add(5)
tree.add(8);
tree.add(6);
tree.add(3);
tree.add(4);
tree.add(2);
tree.add(9);
tree.add(12)
tree.printTree();
