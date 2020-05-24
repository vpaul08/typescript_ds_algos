import { Vertex } from './/Vertex';

export class Inits {
  static initDirectedGraph1(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let item1: Vertex = new Vertex(1);
    let item2: Vertex = new Vertex(2);
    let item3: Vertex = new Vertex(3);
    let item4: Vertex = new Vertex(4);
    let item5: Vertex = new Vertex(5);
    let item6: Vertex = new Vertex(6);

    edgeNodes.set(item1, [item2]);
    edgeNodes.set(item2, [item3]);
    edgeNodes.set(item3, [item4, item6]);
    edgeNodes.set(item4, [item5, item2]);
    edgeNodes.set(item5, [item1]);
    edgeNodes.set(item6, []);
    return edgeNodes;
  }

  static initUndirectedGraph1(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let item1: Vertex = new Vertex(1);
    let item2: Vertex = new Vertex(2);
    let item3: Vertex = new Vertex(3);
    let item4: Vertex = new Vertex(4);
    let item5: Vertex = new Vertex(5);
    let item6: Vertex = new Vertex(6);

    edgeNodes.set(item6, [item3]);
    edgeNodes.set(item1, [item2, item5]);
    edgeNodes.set(item2, [item1, item3, item4]);
    edgeNodes.set(item3, [item2, item4, item6]);
    edgeNodes.set(item4, [item3, item5, item2]);
    edgeNodes.set(item5, [item1, item4]);

    return edgeNodes;
  }

  static initUndirectedDisjointGraph(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let item1: Vertex = new Vertex(1);
    let item2: Vertex = new Vertex(2);
    let item3: Vertex = new Vertex(3);
    let item4: Vertex = new Vertex(4);
    let item5: Vertex = new Vertex(5);
    let item6: Vertex = new Vertex(6);
    let item7: Vertex = new Vertex(7);
    let item8: Vertex = new Vertex(8);

    edgeNodes.set(item8, [item7]);
    edgeNodes.set(item7, [item8]);
    edgeNodes.set(item6, [item3]);
    edgeNodes.set(item1, [item2, item5]);
    edgeNodes.set(item2, [item1, item3, item4]);
    edgeNodes.set(item3, [item2, item4, item6]);
    edgeNodes.set(item4, [item3, item5, item2]);
    edgeNodes.set(item5, [item1, item4]);

    return edgeNodes;
  }

  static initBipartiteGraph1(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let i1: Vertex = new Vertex(1);
    let i2: Vertex = new Vertex(2);
    let i3: Vertex = new Vertex(3);
    let i4: Vertex = new Vertex(4);
    let i5: Vertex = new Vertex(5);
    let i6: Vertex = new Vertex(6);
    let i7: Vertex = new Vertex(7);
    let i8: Vertex = new Vertex(8);

    edgeNodes.set(i1, [i2, i4, i5]);
    edgeNodes.set(i2, [i1, i3, i6]);
    edgeNodes.set(i3, [i2, i4, i7]);
    edgeNodes.set(i4, [i1, i3, i8]);
    edgeNodes.set(i5, [i1, i6, i8]);
    edgeNodes.set(i6, [i2, i5, i7]);
    edgeNodes.set(i7, [i3, i8, i6]);
    edgeNodes.set(i8, [i4, i5, i7]);

    return edgeNodes;
  }

  static initBipartiteGraph2(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let i1: Vertex = new Vertex(1);
    let i2: Vertex = new Vertex(2);
    let i3: Vertex = new Vertex(3);
    let i4: Vertex = new Vertex(4);
    let i5: Vertex = new Vertex(5);
    let i6: Vertex = new Vertex(6);

    edgeNodes.set(i1, [i4, i5, i6]);
    edgeNodes.set(i2, [i4, i5, i6]);
    edgeNodes.set(i3, [i4, i5, i6]);
    edgeNodes.set(i4, [i1, i2, i3]);
    edgeNodes.set(i5, [i1, i2, i3]);
    edgeNodes.set(i6, [i1, i2, i3]);

    return edgeNodes;
  }

  static initBipartiteGraph3(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let i1: Vertex = new Vertex(1);
    let i2: Vertex = new Vertex(2);
    let i3: Vertex = new Vertex(3);
    let i4: Vertex = new Vertex(4);
    let i5: Vertex = new Vertex(5);
    let i6: Vertex = new Vertex(6);

    edgeNodes.set(i1, [i2]);
    edgeNodes.set(i2, [i3]);
    edgeNodes.set(i3, [i4]);
    edgeNodes.set(i4, [i5]);
    edgeNodes.set(i5, [i6]);
    edgeNodes.set(i6, [i1]);

    return edgeNodes;
  }

  static initNonBipartiteGraph3(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let i1: Vertex = new Vertex(1);
    let i2: Vertex = new Vertex(2);
    let i3: Vertex = new Vertex(3);
    let i4: Vertex = new Vertex(4);
    let i5: Vertex = new Vertex(5);
    let i6: Vertex = new Vertex(6);
    let i7: Vertex = new Vertex(7);

    edgeNodes.set(i1, [i2]);
    edgeNodes.set(i2, [i3]);
    edgeNodes.set(i3, [i4]);
    edgeNodes.set(i4, [i5]);
    edgeNodes.set(i5, [i6]);
    edgeNodes.set(i6, [i7]);
    edgeNodes.set(i7, [i1]);

    return edgeNodes;
  }

  static initTopological1(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let i1: Vertex = new Vertex(1);
    let i2: Vertex = new Vertex(2);
    let i3: Vertex = new Vertex(3);
    let i4: Vertex = new Vertex(4);
    let i5: Vertex = new Vertex(5);
    let i6: Vertex = new Vertex(6);

    edgeNodes.set(i1, [i2, i3, i4]);
    edgeNodes.set(i2, [i3, i4, i6]);
    edgeNodes.set(i3, [i4, i5]);
    edgeNodes.set(i4, [i5]);
    edgeNodes.set(i5, [i6]);
    edgeNodes.set(i6, [i3]);

    return edgeNodes;
  }

  static initTopological2(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let i1: Vertex = new Vertex(1);
    let i2: Vertex = new Vertex(2);
    let i3: Vertex = new Vertex(3);
    let i4: Vertex = new Vertex(4);
    let i5: Vertex = new Vertex(5);
    let i6: Vertex = new Vertex(6);
    let i7: Vertex = new Vertex(7);

    edgeNodes.set(i1, [i6, i3, i4]);
    edgeNodes.set(i2, [i3, i4]);
    edgeNodes.set(i3, []);
    edgeNodes.set(i4, []);
    edgeNodes.set(i5, [i6]);
    edgeNodes.set(i6, []);
    edgeNodes.set(i7, [i5]);

    return edgeNodes;
  }

  static initVertexCover(): Map<Vertex, Vertex[]> {
    let edgeNodes: Map<Vertex, Vertex[]> = new Map<Vertex, Vertex[]>();
    let i1: Vertex = new Vertex(1);
    let i2: Vertex = new Vertex(2);
    let i3: Vertex = new Vertex(3);
    let i4: Vertex = new Vertex(4);
    let i5: Vertex = new Vertex(5);
    let i6: Vertex = new Vertex(6);

    edgeNodes.set(i1, [i2, i4]);
    edgeNodes.set(i2, [i1, i4, i3, i5, i6]);
    edgeNodes.set(i3, [i2, i6]);
    edgeNodes.set(i4, [i1, i2, i5]);
    edgeNodes.set(i5, [i4, i2, i6]);
    edgeNodes.set(i6, [i5, i2, i3]);
    return edgeNodes;
  }
}
