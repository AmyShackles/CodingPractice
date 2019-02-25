/* 
The height of a binary search tree is the number
of edges between the tree's root and its furthest leaf.
You are given a pointer, root, pointing to the root
of a binary search tree.  Complete the getHeight
function provided in your editor so that it returns
the height of the binary search tree
*/

/* Code provided
// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };
*/
/* Code I wrote */
// Start of function getHeight
this.getHeight = function(root) {
  if (!root) return -1;
  return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
  // Add your code here
}; // End of function getHeight

/* Code provided 
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;

    var values = _input.split('\n').map(Number);

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    console.log(tree.getHeight(root));
});
*/
