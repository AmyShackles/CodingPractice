function solution(A, B, F) {
  /* If the value of F is greater than the length
    of half of the array, call the solution function
    with the front-end and back-end arrays flipped and 
    the F value equal to the length of the array - F.
    This way, we are always using the array with the most 
    array items in the "right place" as the default array
    and computing the advantage of choosing the element
    in the other array */
    if (F > (A.length/2)) {
      return solution(B, A, B.length-F);
    }
    /* If the number of front end developers is 0,
      we can just sum the numbers from the backend array */
    if (F === 0) {
        return B.reduce((total, current) => total + current);
    }
    /* If the number of front-end developers is the length 
    of the array, we can sum the numbers from the front-end array */
    if (F === A.length) {
      return A.reduce((total, current) => total + current);
    }
  
    let tradeOffs = tradeOff(A, B);
    let trades = mostAdvantageous(tradeOffs, F)
    let count = 0;
    /* If we made the decision to take elements from the other
      array, this is the place to differentiate.  A in this case
      can be either the backend or frontend array since we run
      the solution function with the arrays flipped if the number
      of front-end devs is larger.  */
    for (let i = 0; i < A.length; i++) {
      if (trades[i]) {
        count += A[i];
      } else {
        count += B[i];
      }
    }
    return count;
  }
  
  function tradeOff(A, B) {
    /* Calculate the cost-benefit for taking element from
      one array over the other */
    let tradeOffs = [];
    for (let i = 0; i < A.length; i++) {
      tradeOffs[i] = A[i] - B[i];
    }
    return tradeOffs;
  }
  /* Create a heap in order to sort the values and maintain
    a set order to them in order to be able to iterate through
    the list of tradeoffs once rather than F times */
  class Heap {
    constructor() {
      this.storage = [0];
      this.size = 0;
    }
    insert(obj) {
      this.storage.push(obj);
      this.size += 1;
      this._bubble_up(this.size);
    }
    delete() {
      let prevHead = this.storage[1];
      this.storage[1] = this.storage[this.size];
      this.size -= 1;
      this.storage.pop();
      this._sift_down(1);
      return prevHead;
    }
    get_max() {
      return this.storage[1];
    }
    get_size() {
      return this.size;
    }
    _bubble_up(index) {
      while (Math.floor(index / 2) > 0) {
        if (this.storage[Math.floor(index / 2)].value < this.storage[index].value) {
          [ this.storage[Math.floor(index / 2)], this.storage[index] ] = [ this.storage[index], this.storage[Math.floor(index / 2)] ];
        } else {
          break;
        }
        index = Math.floor(index / 2);
      }
    }
    _sift_down(index) {
      while ((index * 2) <= this.size) {
        let max_child = this._max_child(index);
        if (this.storage[index].value < this.storage[max_child].value) {
          [ this.storage[index], this.storage[max_child] ] = [ this.storage[max_child], this.storage[index] ];
        } else {
          break;
        }
        index = max_child;
      }
    }
    _max_child(index) {
      if (index * 2 + 1 > this.size) {
        return index * 2;
      } else {
        if (this.storage[index * 2].value > this.storage[index * 2 + 1].value) {
          return index * 2;
        } else {
          return index * 2 + 1;
        }
      }
    }
  }
  
  function mostAdvantageous(tradeOffs, F) {
    let max = new Heap();
    for (let i = 0; i < tradeOffs.length; i++) { 
      let current = { index: i, value: tradeOffs[i] }
      max.insert(current);
    }
    let returnedMax = {};
    let i = 0;
    while (i < F) {
      returnedMax[max.get_max().index] = max.get_max().value;
      max.delete();
      i++;
    }
    return returnedMax;
  }