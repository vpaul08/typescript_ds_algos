import { TreeNode } from './TreeNode';

export class Runner {
  public execute(): void {
    console.log('Creating simple tree');
    const root: TreeNode = new TreeNode(5);
    const node1: TreeNode = new TreeNode(1, root);
    const node2: TreeNode = new TreeNode(2, root);
    const node3: TreeNode = new TreeNode(3, root);
    const node4: TreeNode = new TreeNode(4, root);
    const node6: TreeNode = new TreeNode(6, root);
    const node7: TreeNode = new TreeNode(7, root);
  }
}
