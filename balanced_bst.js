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
    this.size = 0;
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
    this.size++;
    return node;
  }

  buildTree(arr) {
    let sortedArray = this.bubbleSortArray(arr);
    console.log(sortedArray);
    this.sortedArraytoBST(sortedArray, 0, sortedArray.length - 1);
    return this.root;
  }
  /*
  removeNode(value) {
    let node = this.root;
    this.findNodeLocationToRemove(node, value);
  }
    
    findNodeLocationToRemove(node, value) {
           if (node == value) {
      node = new Node(value);
      this.size++;
      return node;
    }
    if (node.data == value) {
      return;
    } else {
      if (value < node.data) {
        node.left = this.findNodeLocation(node.leftChild, value);
      } else if (value > node.data) {
        node.right = this.findNodeLocation(node.rightChild, value);
      }
    }
  } 
    }
    */

  find(node, value) {
    if (node.data === value) {
      return node;
    } else {
      if (value < node.data) {
        node = node.leftChild;
        return this.find(node, value);
      } else if (value > node.data) {
        node = node.rightChild;
        return this.find(node, value);
      }
    }
  }

  insertNode(value) {
    let node = this.root;
    this.findNodeLocationToAdd(node, value);
  }

  findNodeLocationToAdd(node, value) {
    if (node == null) {
      node = new Node(value);
      this.size++;
      return node;
    }
    if (node.data == value) {
      return;
    } else {
      if (value < node.data) {
        node.left = this.findNodeLocationToAdd(node.leftChild, value);
      } else if (value > node.data) {
        node.right = this.findNodeLocationToAdd(node.rightChild, value);
      }
    }
  }

  levelOrderTraversal(bst) {
    let queue = [];
    let lotArray = [];
    if (bst.root !== null) {
      queue.unshift(bst.root);
    } else return;

    while (queue.length != 0) {
      let node = queue.pop();
      lotArray.push(node.data);
      if (node.leftChild) {
        queue.unshift(node.leftChild);
      }
      if (node.rightChild) {
        queue.unshift(node.rightChild);
      }
    }
    console.log(lotArray);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let arrB = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const BST = new Tree();
console.log(arrB);
let root = BST.buildTree(arrB);
console.log(BST);
console.log(BST);
console.log(BST.levelOrderTraversal(BST));
