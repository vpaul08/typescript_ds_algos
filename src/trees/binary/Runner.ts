import { Tree } from './Tree';
import { TreeNode } from './TreeNode';
export class Runner {
  public execute(): void {
    let t: Tree = this.initTree();
    t.traverseInOrder();
    t.search(6) ? console.log('Found :)') : console.log('Not Found :(');
    console.log(`Max value: ${t.getMaxIterative2()}`);
    console.log(`Min value: ${t.getMin()}`);
    console.log(`Tree Height: ${t.getHeight()}`);
  }

  public initTree(): Tree {
    const node0: TreeNode = new TreeNode(4);
    const node1: TreeNode = new TreeNode(1);
    const node2: TreeNode = new TreeNode(2);
    const node3: TreeNode = new TreeNode(3);
    const node5: TreeNode = new TreeNode(5);
    const node6: TreeNode = new TreeNode(6);
    const node7: TreeNode = new TreeNode(7);
    node0.setLeft(node2);
    node2.setLeft(node1);
    node2.setRight(node3);
    node0.setRight(node6);
    node6.setLeft(node5);
    node6.setRight(node7);
    return new Tree(node0);
  }
}
