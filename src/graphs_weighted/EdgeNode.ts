import { Vertex } from './Vertex';

export class EdgeNode {
  node: Vertex;
  weight: number;
  constructor(node: Vertex, weight: number) {
    this.node = node;
    this.weight = weight;
  }
}
