class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertix(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}
