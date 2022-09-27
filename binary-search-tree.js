// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  // insert(val, currentNode = this.root) {
  //   let newNode = new TreeNode(val);
  //   // creating new node if root is null
  //   if (currentNode === null) {
  //     this.root = newNode;
  //     return this
  //   }
  //   // this is creating left node
  //   let curr = this.root
  //   while(curr){
  //     if (val === curr.val) return
  //     if (val < curr.val){
  //       if(curr.left === null){
  //         curr.left = newNode
  //         return this
  //       }
  //       curr = curr.left
  //       // this is creating right node
  //     } else {
  //       if (curr.right === null){
  //         curr.right = newNode
  //         return this
  //       }
  //       curr = curr.right
  //     }
  //   }
  // }
  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val)
    if(!currentNode) this.root = newNode
    else if(currentNode.val > val) {
      if(!currentNode.left) {
        currentNode.left = newNode
      } else (
        this.insert(val, currentNode.left)
      )
    } else if (currentNode.val < val) {
      if(!currentNode.right) {
        currentNode.right = newNode
      } else {
        this.insert(val, currentNode.right)
      }
    }
  }
  search(val) {
    let currentNode = this.root

    while(currentNode) {
    if(currentNode.val === val) return true;

    if(currentNode.val > val) {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }
    }
    return false
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
