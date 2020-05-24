export class TreeNode {
  private left: TreeNode;
  private right: TreeNode;
  private parent: TreeNode;
  private data: number;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  public setLeft(left: TreeNode) {
    left.setParent(this);
    this.left = left;
  }

  public setParent(parent: TreeNode) {
    this.parent = parent;
  }

  public setRight(right: TreeNode) {
    right.setParent(this);
    this.right = right;
  }

  public getData(): number {
    return this.data;
  }

  public getLeft(): TreeNode {
    return this.left;
  }

  public getRight(): TreeNode {
    return this.right;
  }
}
