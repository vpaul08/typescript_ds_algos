import { Vertex } from './Vertex';
import { cloneDeep } from 'lodash';

export abstract class Graph {
  edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
  adjMatrix: number[][];
  incMatrix: number[][];
  edges: Map<number, Vertex[]> = new Map<number, Vertex[]>();
  totalEdges: number;
  diameter: number;

  constructor(edgeNodes: Map<Vertex, Vertex[]>) {
    this.edgeNodes = edgeNodes;
    this.totalEdges = 0;
  }

  printGraph(): void {
    console.info('\nPrinting Graph...');
    this.edgeNodes.forEach((destinations: Vertex[], origin: Vertex) => {
      let destinationsArray: Number[] = destinations.map(item => item.value);
      console.log(`${origin.value} -> ${destinationsArray}`);
    });
  }

  getNodes(): Vertex[] {
    return Array.from(this.edgeNodes.keys());
  }

  getAdjList(): Map<Vertex, Vertex[]> {
    return this.edgeNodes;
  }

  initAdjMatrix(): void {
    if (this.edgeNodes.size == 0) {
      console.log("We can't have adjacency matrix over empty adjacency list.");
      return;
    }
    let nodeSize = this.getNodes().length;
    this.adjMatrix = [];
    for (let i = 0; i < nodeSize; i++) {
      this.adjMatrix[i] = [];
      for (let j = 0; j < nodeSize; j++) {
        this.adjMatrix[i][j] = 0;
      }
    }
  }

  generateAdjMatrix(): void {
    this.initAdjMatrix();
    this.edgeNodes.forEach((value, key) => {
      value.forEach(item => {
        key.degree++;
        this.adjMatrix[key.value - 1][item.value - 1] = 1;
        this.edges.set(this.totalEdges + 1, [key, item]);
        this.totalEdges++;
      });
    });
  }

  printAdjMatrix(): void {
    console.info('\nPrinting Adjacent Matrix...');
    if (this.adjMatrix[0].length == 0) {
      console.log('Adjacency matrix empty.');
      return;
    }
    console.log(this.adjMatrix);
  }

  initIncMatrix(): void {
    if (this.edgeNodes.size == 0) {
      console.log("We can't have adjacency matrix over empty adjacency list.");
      return;
    }
    let nodeSize = this.getNodes().length;
    this.incMatrix = [];
    for (let i = 0; i < nodeSize; i++) {
      this.incMatrix[i] = [];
      for (let j = 0; j < this.totalEdges; j++) {
        this.incMatrix[i][j] = 0;
      }
    }
  }

  generateIncMatrix(): void {
    let edgeIndex: number = 0;
    this.initIncMatrix();
    this.edgeNodes.forEach((value, key) => {
      value.forEach(item => {
        this.incMatrix[key.value - 1][edgeIndex] = 1;
        this.incMatrix[item.value - 1][edgeIndex] = 1;
        edgeIndex++;
      });
    });
  }

  generateMatrices(): void {
    this.generateAdjMatrix();
    this.generateIncMatrix();
  }

  printEdges(): void {
    console.info('\nPrinting Edges...');
    this.edges.forEach((value, key) => {
      console.log(`${key}: ${value[0].value} -> ${value[1].value}`);
    });
  }

  printIncMatrix(): void {
    console.info('\nPrinting Incidence Matrix...');
    if (this.incMatrix[0].length == 0) {
      console.log('Adjacency matrix empty.');
      return;
    }
    console.log(this.incMatrix);
  }

  getIndependentSet(): Vertex[] {
    let iSet: Vertex[] = [];
    let iCover: Vertex[] = [];
    let totalVertices: number = this.getNodes().length;
    let totalProcessed: number = 0;
    while (totalProcessed !== totalVertices) {
      let unCoveredSet: Vertex[] = this.getNodes().filter(
        vertex => iSet.indexOf(vertex) === -1 && iCover.indexOf(vertex) === -1,
      );
      let minDegreeVertex: Vertex = unCoveredSet[0];
      unCoveredSet.forEach(vertex => {
        if (vertex.degree < minDegreeVertex.degree) {
          minDegreeVertex = vertex;
        }
      });
      iSet.push(minDegreeVertex);

      // console.log(`Analysing ${minDegreeVertex.value}`);
      this.edgeNodes.get(minDegreeVertex).forEach(vertex => {
        if (iSet.indexOf(vertex) === -1 && iCover.indexOf(vertex) === -1) {
          // console.log(`Analysing sub vertex ${vertex.value} with degree ${vertex.degree}`);
          iCover.push(vertex);
          totalProcessed++;
        }
      });
      totalProcessed++;
    }
    console.log('Independent Set:');
    let nodeValues: Number[] = iSet.map(item => item.value);
    console.log(nodeValues);

    console.log('Independent Set Cover:');
    nodeValues = iCover.map(item => item.value);
    console.log(nodeValues);

    return iSet;
  }

  resetNodesSoft(): void {
    this.diameter = 0;
    let nodes = Array.from(this.edgeNodes.keys());
    nodes.map(item => {
      item.setUnvisited();
      item.entryTime = null;
      item.exitTime = null;
      item.bfsParent = null;
      item.dfsParent = null;
      item.resetColor();
      item.visited = false;
      item.processed = false;
      item.depth = 0;
    });
  }

  printNodeGroup(nodes: Vertex[]): void {
    console.info('\nPrinting Graph Nodes...');
    let nodeValues: Number[] = nodes.map(item => item.value);
    console.log(nodeValues);
  }

  getMinDegreeNode(): Vertex {
    let minDegreeVertex: Vertex;
    minDegreeVertex = this.getNodes()[0];
    this.getNodes().forEach(vertex => {
      if (vertex.degree !== undefined && vertex.degree !== null) {
        if (minDegreeVertex.degree === null || minDegreeVertex.degree > vertex.degree) {
          minDegreeVertex = vertex;
        }
      }
    });
    return minDegreeVertex;
  }

  printAllNodes(): void {
    this.printNodeGroup(this.getNodes());
  }

  printNodeDegrees(): void {
    console.info('\nPrinting Vertex Degrees...');
    let nodeValues: string[] = this.getNodes().map(item => `${item.value} (${item.degree})`);
    console.log(nodeValues);
  }

  clone(): Graph {
    return cloneDeep(this);
  }
}
