class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjcentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjcentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  DFSRecursive(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  DFSIterative(start) {
    const stack = [start];
    const visited = {};
    const result = [];
    let currVertex;
    const adjacencyList = this.adjacencyList;

    visited[start] = true;

    while (stack.length) {
      currVertex = stack.pop();
      result.push(currVertex);

      adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

g.DFSRecursive('A');

console.log(g.DFSRecursive('A'));
console.log(g.DFSIterative('A'));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//         f
