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

  //works
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

  //works
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

  //work
  buildTree(arr) {
    let sortedArray = this.bubbleSortArray(arr);
    this.sortedArraytoBST(sortedArray, 0, sortedArray.length - 1);
    return this.root;
  }

  // works fine (don't change)
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

  insertNode(node, value) {
    if (node == null) {
      node = new Node(value);
      this.size++;
      return node;
    }
    if (node.data == value) {
      return;
    } else {
      if (value < node.data) {
        return this.insertNode(node.leftChild, value);
      } else if (value > node.data) {
        return this.insertNode(node.rightChild, value);
      }
    }
  }

  bstDeleteNode(node, value) {
    if (node === null) {
      return node;
    }
    if (value === node.data) {
      if (node.leftChild === null && node.rightChild === null) {
        node = null;
      } else if (node.leftChild === null) {
        node = node.rightChild;
        return node;
      } else if (node.rightChild === null) {
        node = node.leftChild;
        return node;
      } else {
        let tempNode = this.findSmallestNode(node.rightChild);
        node.data = tempNode.data;
        node.rightChild = this.bstDeleteNode(node.rightChild, tempNode.data);
        return node;
      }
    } else if (value < node.data) {
      return this.bstDeleteNode(node.leftChild, value);
    } else {
      return this.bstDeleteNode(node.rightChild, value);
    }
  }

  findSmallestNode(node) {
    while (node.leftChild) {
      node = node.leftChild;
    }
    return node;
  }

  levelOrderTraversal(bst) {
    let queue = [];
    let lotArray = [];
    if (bst.root !== null) {
      queue.unshift(bst.root);
    } else return lotArray;

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
    return lotArray;
  }

  displayInorderArray(node) {
    let nodeArray = [];
    if (node) {
      this.inorderTraversal(node.leftChild);
      nodeArray.push(this.inorderTraversal(node));
      this.inorderTraversal(node.rightChild);
    }
    return nodeArray;
  }

  inorderTraversal(node) {
    let nodeArray = [];
    if (node !== null) {
      this.inorderTraversal(node.leftChild);
      nodeArray.push(node.data);
      this.inorderTraversal(node.rightChild);
    } else {
      return;
    }
    return nodeArray;
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let arrB = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let arrC = [1];
const BST = new Tree();
//console.log(arrB);
BST.buildTree(arrB);
console.log(BST);
console.log("hello");
console.log(BST.inorderTraversal(BST.root));
console.log(BST.levelOrderTraversal(BST));
//console.log(BST.find(BST.root, 9));
//BST.bstDeleteNode(BST.root, 67);
//console.log(BST.levelOrderTraversal(BST));
//console.log(BST.insertNode(BST.root, 75));
//console.log(BST.levelOrderTraversal(BST));
console.log(BST);

// fix delete node bugs
