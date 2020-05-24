import { Vertex } from './Vertex';
import { Graph } from './Graph';

export class DfsGraph extends Graph {
  dfs(start: Vertex): void {
    this.resetNodesSoft();
    console.log('Printing DFS...');
    this.recurseDfs(start);
  }

  recurseDfs(node: Vertex): void {
    node.setVisited(); // Process vertex early
    for (let adjItem of this.edgeNodes.get(node)) {
      if (adjItem.isUnvisited()) {
        adjItem.setVisited(); // Process edge
        this.recurseDfs(adjItem);
      }
    }
    node.print(); // Process vertex late
    node.setProcessed();
  }

  dfsTopological(): number[] {
    this.resetNodesSoft();
    let trace: number[] = [];
    let nodes: Vertex[] = this.getNodes();
    for (let node of nodes) {
      if (!node.getVisitedBool()) {
        this.recurseDfsTopological(node, trace);
      }
    }
    return trace;
  }

  recurseDfsTopological(node: Vertex, trace: number[] = []): void {
    node.setVisitedBool(true); // Process vertex early
    for (let adjItem of this.edgeNodes.get(node)) {
      if (!adjItem.getVisitedBool()) {
        adjItem.setVisitedBool(true); // Process edge
        this.recurseDfsTopological(adjItem, trace);
      } else if (adjItem.getVisitedBool() && !adjItem.getProcessedBool()) {
        console.log('The graph can not be topological due to a cycle');
      }
    }
    trace.push(node.value);
    node.setProcessedBool(true);
  }
}
