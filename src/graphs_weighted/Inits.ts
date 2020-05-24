import { Vertex } from './Vertex';
import {EdgeNode} from './EdgeNode';

export class Inits {
  /**
   * 1 => 2(5), 3(1)
   * 2 => 1(5), 4(3), 5(2)
   * 3 => 1(1), 6(7)
   * 4 => 2(3), 6(5), 5(7)
   * 5 => 2 (2), 4(7), 7(9)
   * 6 => 3(7), 4(5), 7(8), 8(1)
   * 7 => 5(9), 6(8), 8(2)
   * 8 => 6(1), 7(2)
   */
  static initGraph1(): Map<Vertex, EdgeNode[]> {
    let edgeNodes: Map<Vertex, EdgeNode[]> = new Map<Vertex, EdgeNode[]>();
    let i1: Vertex = new Vertex(1);
    let i2: Vertex = new Vertex(2);
    let i3: Vertex = new Vertex(3);
    let i4: Vertex = new Vertex(4);
    let i5: Vertex = new Vertex(5);
    let i6: Vertex = new Vertex(6);
    let i7: Vertex = new Vertex(7);
    let i8: Vertex = new Vertex(8);

    edgeNodes.set(i1, [new EdgeNode(i2, 5), new EdgeNode(i3, 1)]); // 1 => 2(5), 3(1)
    edgeNodes.set(i2, [new EdgeNode(i1, 5), new EdgeNode(i4, 3), new EdgeNode(i5, 2)]); // 2 => 1(5), 4(3), 5(2)
    edgeNodes.set(i3, [new EdgeNode(i1, 1), new EdgeNode(i6, 7)]); // 3 => 1(1), 6(7)
    edgeNodes.set(i4, [new EdgeNode(i2, 3), new EdgeNode(i5, 7), new EdgeNode(i6, 5)]); // 4 => 2(3), 6(5), 5(7)
    edgeNodes.set(i5, [new EdgeNode(i2, 2), new EdgeNode(i4, 7), new EdgeNode(i7, 9)]); // 5 => 2 (2), 4(7), 7(9)
    edgeNodes.set(i6, [new EdgeNode(i3, 7), new EdgeNode(i4, 5), new EdgeNode(i7, 8), new EdgeNode(i8, 1)]); // 6 => 3(7), 4(5), 7(8), 8(1)
    edgeNodes.set(i7, [new EdgeNode(i5, 9), new EdgeNode(i6, 8), new EdgeNode(i8, 2)]); // 7 => 5(9), 6(8), 8(20
    edgeNodes.set(i8, [new EdgeNode(i6, 1), new EdgeNode(i7, 2)]); // 8 => 6(1), 7(2)
    return edgeNodes;
  }
}
