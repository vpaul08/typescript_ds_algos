import { Vertex } from './Vertex';

export class TreeNode {
  source: Vertex;
  children: TreeNode[];

  constructor(vertex: Vertex) {
    this.source = vertex;
    this.children = [];
  }

  addChild(node: TreeNode): void {
    this.children.push(node);
  }

  equals(node: TreeNode): boolean {
    return this.source.id === node.source.id;
  }
}
