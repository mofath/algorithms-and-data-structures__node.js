class PriorityQueue {
  constructor() {
    this.values = [];
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  enequeue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // buld up the initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enequeue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enequeue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        // build up shortest path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // Find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor];
          // Calculate new distances to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            // updating new smallest to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we get to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enequeue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

//            A
//           /  \
//       2  /     \ 4
//         /       \
//        /          B
//       /            \  3
//      C _            \
//      |   \  2        E
//      |    \    3  /   \
//       \    \    /     |
//        \      D      /
//      4  \     |    /
//           \   |  /   4
//             \ | /
//               F
//

console.log(graph.Dijkstra('A', 'E'));
