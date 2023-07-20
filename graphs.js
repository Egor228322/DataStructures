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
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addedge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);

        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1);
    }

    dfs(startVertex, visited = new Set(), result = []) {
        visited.add(startVertex);
        result.push(startVertex);

        for (const neighbour of this.adjList.get(startVertex)) {
            if (!visited.has(neighbour)) {
                this.dfs(neighbour, visited, result);
            }
        }

        return result;

    }

    bfs (startVertex) {
        const visited = new Set();
        const queue = [];
        const result = [];


        visited.add(startVertex);
        queue.push(startVertex);
        
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            for (let neighbour of this.adjList.get(currentVertex)) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
        return result;


    }





}

const myGraph = new Graph();

console.log(myGraph);

//Excellent representaion of realtionships between data
//Scaling is hard because graphs become very complex as the number of nodes increases 

//Has Path in a directional, acyclic graph

//Depth First

const hasPathD = function(graph, startVertex, destinationVertex) {
    if (startVertex == destinationVertex) {
        return true;
    }


    for (let neighbour of graph[startVertex]) {
        if (hasPathD(graph, neighbour, destinationVertex) == true) {
            return true;
        } 
    }
     
    return false;
}

//Breadth First

const hasPathB = function(graph, startVertex, destinationVertex) {

    const queue = [];
    queue.push(startVertex);
    
    while (queue.length > 0) {
        const vertex = queue.shift();

        if (vertex == destinationVertex) return true;
        for (let neighbour of graph[vertex]) {
            queue.push(neighbour);
        }

    }

    return false;


}

//Undirected Graph DFS

const undirectedPath = function (edges, nodeA, nodeB) {
    const graph = buildGraph(edges);
    return hasPath (graph, nodeA, nodeB, new Set());
}

function hasPath(graph, src, dst, visited) {
    if (visited.has(src)) return false;
    if (src == dst) {
        return true;
    }

    visited.add(src);

    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dst) == true) {
            return true;
        }
    }

    return false;

}

function buildGraph(edges) {
    const graph = {}

    for (let edge of edges) {
        const [a ,b] = edge;
        if (!graph[a]) {
            graph[vertex] = [b];
        }
        if (!graph[b]) {
            graph[vertex] = [a];
        }
        graph[a].push(b);
        graph[b].push(a);
        
    }

    return graph;    
}


//

const connectedComponentsCount = function(graph) {

    const visted = new Set();
    let count = 0;
    
    
    for (let node in graph) {
        if (traverse(graph, node, visted) == true) {
            count++;
        }
    }
    
    return count;
}

function traverse (graph, node, visited) {
    if (visited.has(String(node))) return false;

    visited.add(String(node));

    for (let neighbour of graph[node]) {
        traverse(graph, neighbour, visited);
    }

    return true;

}