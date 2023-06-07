class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class Tree {
  constructor(data) {
    this.root = null;
  }
  bubbleSortArray(arr) {
    let swapped;
    let cleanArray = arr;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        } else if (arr[i] === arr[i + 1]) {
          cleanArray.splice(i, 1);
          swapped = true;
        }
      }
    } while (swapped);
    return cleanArray;
  }

  sortedArraytoBST(arr, start, end) {
    if (start > end) {
      return null;
    }
    var mid = parseInt((start + end) / 2);
    var node = new Node(arr[mid]);
    node.leftChild = this.sortedArraytoBST(arr, start, mid - 1);
    node.rightChild = this.sortedArraytoBST(arr, mid + 1, end);
    this.root = node;
    return node;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let arrB = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const BST = new Tree();
console.log(arrB);
const sortedArray = BST.bubbleSortArray(arrB);
console.log(sortedArray);
BST.sortedArraytoBST(sortedArray, 0, sortedArray.length - 1);
console.log(BST);
