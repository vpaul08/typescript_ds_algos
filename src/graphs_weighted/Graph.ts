import { Vertex } from './Vertex';
import { EdgeNode } from './EdgeNode';
import { TreeNode } from './TreeNode';

export class Graph {
  edgeNodes: Map<Vertex, EdgeNode[]> = new Map<Vertex, EdgeNode[]>();
  spanningTreeRoot: TreeNode;
  inTreeNodes: Vertex[];

  constructor(edgeNodes: Map<Vertex, EdgeNode[]>) {
    this.edgeNodes = edgeNodes;
    this.inTreeNodes = [];
  }

  printGraph(): void {
    console.info('\nPrinting Graph...');
    this.edgeNodes.forEach((destinations: EdgeNode[], origin: Vertex) => {
      let destinationsArray: string[] = destinations.map(item => `${item.node.id} (${item.weight}) (${item.node.minDistance})`);
      console.log(`${origin.id} -> ${destinationsArray}`);
    });
  }

  /**
   * 1. Add first node in tree
   * 2. Traverse the tree and find its non-tree neighbours
   * 3. Pick the neighbour with minimum weight on edge
   * 4. Get the source node in the tree for that edge
   * 5. Append this min wt node to the source as a child
   * 4. Goto 2 till no non-tree nodes are left
   */
  generatePrimsTree(): void {
    let vertex: Vertex;
    vertex = this.edgeNodes.keys().next().value;
    this.inTreeNodes.push(vertex);
    this.spanningTreeRoot = new TreeNode(vertex);

    while (this.inTreeNodes.length < this.edgeNodes.size) {
      let parent: Vertex;
      let minWtChild: EdgeNode;
      this.inTreeNodes.forEach(node => {
        let minWtEdgeListNode: EdgeNode = this.getMinWtNonTreeNode(this.edgeNodes.get(node));
        if (minWtEdgeListNode !== undefined && (minWtChild === undefined || minWtChild.weight > minWtEdgeListNode.weight)) {
          minWtChild = minWtEdgeListNode;
          parent = node;
        }
      });
      if (minWtChild !== undefined) {
        console.log(`Inserting node ID: ${minWtChild.node.id}`);
        this.inTreeNodes.push(minWtChild.node);
        this.insertTreeChild(parent, minWtChild);
      }
    }
  }

  getMinWtNonTreeNode(edgeNodes: EdgeNode[]): EdgeNode {
    let minWtNode: EdgeNode;
    edgeNodes.forEach(edgeNode => {
      if (this.inTreeNodes.indexOf(edgeNode.node) === -1) {
        if (minWtNode === undefined || minWtNode.weight > edgeNode.weight) {
          minWtNode = edgeNode;
        }
      }
    });
    return minWtNode;
  }

  runDijkstra(): void {
    let vertex: Vertex;
    vertex = this.edgeNodes.keys().next().value;
    vertex.minDistance = 0;

    while (this.inTreeNodes.indexOf(vertex) === -1) {
      this.inTreeNodes.push(vertex);
      if (this.edgeNodes.get(vertex) !== undefined) {
        this.edgeNodes.get(vertex).forEach(edgeNode => {
          if ((edgeNode.node.minDistance > vertex.minDistance + edgeNode.weight)) {
            edgeNode.node.minDistance = vertex.minDistance + edgeNode.weight;
          }
        });
        vertex = this.getMinDistNonTreeNode(this.edgeNodes.get(vertex));
      }
    }
  }

  getMinDistNonTreeNode(edgeNodes: EdgeNode[]): Vertex {
    let minDistNode: Vertex;
    edgeNodes.forEach(edgeNode => {
      if (this.inTreeNodes.indexOf(edgeNode.node) === -1) {
        if (minDistNode === undefined || minDistNode.minDistance > edgeNode.node.minDistance) {
          minDistNode = edgeNode.node;
        }
      }
    });
    return minDistNode;
  }

  printTree(): void {
    this.printTreeRecursive(this.spanningTreeRoot);
  }

  printTreeRecursive(node: TreeNode): void {
    console.log(node.source.id);
    node.children.forEach(item => {
      this.printTreeRecursive(item);
    });
  }

  insertTreeChild(parent: Vertex, child: EdgeNode): void {
    this.insertTreeChildRecursive(this.spanningTreeRoot, parent, child);
  }

  insertTreeChildRecursive(current: TreeNode, parent: Vertex, child: EdgeNode): void {
    if (current.source.id === parent.id) {
      current.addChild(new TreeNode(child.node));
      return;
    }
    current.children.forEach(item => {
      this.insertTreeChildRecursive(item, parent, child);
    });
  }
}
