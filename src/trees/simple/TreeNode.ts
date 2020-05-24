export class TreeNode {
  private children: TreeNode[];
  private parent: TreeNode;
  private data: number;

  constructor(data: number, parent?: TreeNode) {
    this.data = data;
    this.parent = parent;
  }

  public addNodes(children: TreeNode[]) {
    this.children = [...this.children, ...children];
  }

  public addNode(child: TreeNode) {
    this.children.push(child);
  }
}
