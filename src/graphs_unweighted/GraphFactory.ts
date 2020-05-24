import { Graph } from './Graph';
import { Vertex } from './Vertex';
import { BasicGraph } from './BasicGraph';
import { BfsGraph } from './BfsGraph';
import { DfsGraph } from './DfsGraph';

export enum GraphType {
  BFS,
  DFS,
  BASIC,
}

export class GraphFactory {
  static create(edgeNodes: Map<Vertex, Vertex[]>, graphType: GraphType): Graph {
    if (graphType === GraphType.BASIC) {
      return new BasicGraph(edgeNodes);
    } else if (graphType === GraphType.BFS) {
      return new BfsGraph(edgeNodes);
    } else if (graphType === GraphType.DFS) {
      return new DfsGraph(edgeNodes);
    }
  }
}
