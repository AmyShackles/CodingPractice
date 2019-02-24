/* 

Node object:
- integer data field, data
- Node instance poijnter, next

Node insert(*head, int data) {
  // head points to head of linked list
  // data is value that needs to be added to the end of the list as a new Node object
}

Complete the insert function so that it creates a new Node and inserts it at the tail of the linked list referenced by the head parameter.  Once the new node is added, return the reference to the head node

Note: If the head argument passed in is null, the initial list is empty 

*/
/* Code I modified to test with repl.it */
process.stdin.setEncoding("ascii");

var input_currentline = 0;

function start(input_stdin) {
  input_stdin_array = input_stdin.split("\n");
  main();
}

start(`4
2
3
4
1`);
/* Code provided */
function readLine() {
  return input_stdin_array[input_currentline++];
}
function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  /* Code I wrote */
  this.insert = function(head, data) {
    if (head === null) {
      return new Node(data);
    }
    if (head.next === null) {
      head.next = new Node(data);
    } else {
      this.insert(head.next, data);
    }
    return head;
  };
  /* Code provided */
  this.display = function(head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}

/* Code provided */
function main() {
  var T = parseInt(readLine());
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < T; i++) {
    var data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}
