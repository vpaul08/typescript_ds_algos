import { TreeNode } from './TreeNode';
export class Tree {
  private root: TreeNode;
  private size: number;

  constructor(root: TreeNode) {
    this.root = root;
  }

  public getHeight(leaf: TreeNode = null): number {
    let h = 0;
    let node: TreeNode = this.root;

    for (node; node.getLeft() !== leaf; node = node.getLeft()) {
      h++;
    }
    return h;
  }

  public getMin(node: TreeNode = this.root): number {
    if (node === null) return;

    if (node.getLeft() === null) {
      return node.getData();
    }
    return this.getMin(node.getLeft());
  }

  public getMax(node: TreeNode = this.root): number {
    if (node === null) return;

    if (node.getRight() === null) {
      return node.getData();
    }
    return this.getMax(node.getRight());
  }

  public getMaxIterative(): number {
    let p: TreeNode = this.root;
    if (p === undefined) return;

    do {
      p = p.getRight();
    } while (p.getRight() !== null);

    return p.getData();
  }

  public getMaxIterative2(): number {
    let p: TreeNode = this.root;
    if (p === undefined) return;
    for (p; p.getRight() !== null; p = p.getRight()) {
      continue;
    }
    return p.getData();
  }

  public traverseInOrder(node: TreeNode = this.root): void {
    if (node === null) return;

    this.traverseInOrder(node.getLeft());
    console.log(node.getData());
    this.traverseInOrder(node.getRight());
  }

  public search(n: number, node: TreeNode = this.root): boolean {
    if (node === null) return false;

    if (n === node.getData()) {
      return true;
    } else if (n > node.getData()) {
      return this.search(n, node.getRight());
    } else {
      return this.search(n, node.getLeft());
    }
  }
}
