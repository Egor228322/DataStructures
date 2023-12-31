//Trees are different from a linked list by having more than one node extending from the root
//Linked lists are also a type of tree, but linear
//Nodes inside of a tree can only point to the child nodes

//A binary tree is a tree with each node that can only have 0,1 or 2 child nodes and every child node is supposed to have only one parent
//Right Node is greater than left node

//BST have a time complexity of O (log n)
//No O(1) opreations
//Unbalanced trees turn into long lists


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert (value) {
        const newNode = new Node(value);
        if (this.root == null) {this.root = newNode;
        } else {
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (value > currentNode.value) {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    }

    remove (value) {
        if (!this.root) {
            return false;
          }
          let currentNode = this.root;
          let parentNode = null;
          while(currentNode) {
            if (value < currentNode.value) {
              parentNode = currentNode;
              currentNode = currentNode.left;
            } else if (value > currentNode.value) {
              parentNode = currentNode;
              currentNode = currentNode.right;
            } else if (currentNode.value === value) {
              
              //Option 1: No right child: 
              if (currentNode.right === null) {
                if (parentNode === null) {
                  this.root = currentNode.left;
                } else {
                  
                  //if parent > current value, make current left child a child of parent
                  if (currentNode.value < parentNode.value) {
                    parentNode.left = currentNode.left;
                  
                  //if parent < current value, make left child a right child of parent
                  } else if (currentNode.value > parentNode.value) {
                    parentNode.right = currentNode.left;
                  }
                }
              
              //Option 2: Right child which doesn't have a left child
              } else if (currentNode.right.left === null) {
                currentNode.right.left = currentNode.left;
                if(parentNode === null) {
                  this.root = currentNode.right;
                } else {
                  
                  //if parent > current, make right child of the left the parent
                  if (currentNode.value < parentNode.value) {
                    parentNode.left = currentNode.right;
                  
                  //if parent < current, make right child a right child of the parent
                  } else if (currentNode.value > parentNode.value) {
                    parentNode.right = currentNode.right;
                  }
                }
              
              //Option 3: Right child that has a left child
              } else {
      
                //find the Right child's left most child
                let leftmost = currentNode.right.left;
                let leftmostParent = currentNode.right;
                while (leftmost.left !== null) {
                  leftmostParent = leftmost;
                  leftmost = leftmost.left;
                }
                
                //Parent's left subtree is now leftmost's right subtree
                leftmostParent.left = leftmost.right;
                leftmost.left = currentNode.left;
                leftmost.right = currentNode.right;
      
                if(parentNode === null) {
                  this.root = leftmost;
                } else {
                  if(currentNode.value < parentNode.value) {
                    parentNode.left = leftmost;
                  } else if(currentNode.value > parentNode.value) {
                    parentNode.right = leftmost;
                  }
                }
              }
            return true;
            }
          }
    }
    
    
    lookUp(val) {
          if (!this.root) return false;
          else {
              let currentNode = this.root;
              while (currentNode) {
                  if (val > currentNode.value) {
                      currentNode = currentNode.right;
                  } else if (val < currentNode.value) {
                      currentNode = currentNode.left;
                  } else if (val == currentNode.value) {
                      return true;
                  }
              }
          }
          return false;
    }

    BFS () {
        
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            console.log(queue)
            console.log(currentNode.value);
            list.push(currentNode.value);
            
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            
        }
        return list;
    }

    BFSRecursive(queue, list) {
        if (queue.length == 0) {
          return list;
        }

        let currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        
        return this.BFSRecursive(queue, list);

    }

    DFSInOrder() {
      return traverseInOrder(this.root, []);
    }

    DFSPostOrder() {
      return traversePostOrder(this.root, []);
    }

    DFSPreOrder() {
      return traversePreOrder(this.root, []);
    }
}


function traversePreOrder(node, list){
  list.push(node.value);
  if(node.left) {
    traversePreOrder(node.left, list);
  }
  if(node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traverseInOrder(node, list){
  if(node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if(node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list){
  if(node.left) {
    traversePostOrder(node.left, list);
  }
  if(node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

console.log(tree);

console.log(tree.lookUp(7));
//
//       9
//    4     20
//  1   6  15  270
//
//
//
//
//