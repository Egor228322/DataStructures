//Graphs

//Each item is called a vertex or node, connected by edges
//A linked list is the basic building block of a tree, and a tree is the bulding block of a graph
//Grpahs can be directed and undirected
//Graphs can be weighted, meaning the vertices can store data
//There can be cyclic and acyclic graphs

//Example 

//             2 ------------- 0
//            / \
//           /   \
//          /     \
//         /       \
//        1 ------- 3


//Edge list 
//An array containing all the vertices

const graph = [[0,2], [2,3], [3,1], [1,2]];

//Adjacent List
//an array (preferably an object) that uses the node value as an index
//for each index the neighbouring nodes are displayed

const graph2 = [[2], [2,3], [0,1,3], [1,2]];

//Adjacent Matrix
//Each array represents the node at the index
//So the first array represents index 0 (node 0) and the connections it has with other nodes
//The 0 node has a connection with 2 node
//The 1 node has a connection with the 2, and 3 node
//The 2 node has a connection with the 0,1, and 3 node 
//The 3 node has a connection with the 2, and 1 node
//An object will be a better representation because the property name will be the actual node

const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];

const graphs4 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    3: [1, 1, 0, 1],
    4: [0, 1, 1, 0]
}

//Making an undirected, unweighted, cyclic graph


class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        return this;
    }

    addedge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return this;
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addedge('3', '1');
myGraph.addedge('3', '4');
myGraph.addedge('4', '2');
myGraph.addedge('4', '5');
myGraph.addedge('1', '2');
myGraph.addedge('1', '0');
myGraph.addedge('0', '2');
myGraph.addedge('6', '5');

console.log(myGraph);

//Excellent representaion of realtionships between data
//Scaling is hard because graphs become very complex as the number of nodes increases 

