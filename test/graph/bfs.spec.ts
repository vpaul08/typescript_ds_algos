import {BfsGraph} from '../../src/graphs_unweighted/BfsGraph';
import {Vertex} from '../../src/graphs_unweighted/Vertex';
import {Inits} from '../../src/graphs_unweighted/Inits';
import {GraphFactory, GraphType} from '../../src/graphs_unweighted/GraphFactory';

describe('BFS', () => {
  test('Is Bipartite', () => {
    let g: BfsGraph = GraphFactory.create(Inits.initBipartiteGraph2(), GraphType.BFS) as BfsGraph;
    let graphNodes: Vertex[] = g.getNodes();
    let start: Vertex = graphNodes[0];
    expect(g.checkBipartite(start)).toBeTruthy();
  });

  test('Is Not Bipartite', () => {
    let g: BfsGraph = GraphFactory.create(Inits.initNonBipartiteGraph3(), GraphType.BFS) as BfsGraph;
    let graphNodes: Vertex[] = g.getNodes();
    let start: Vertex = graphNodes[0];
    expect(g.checkBipartite(start)).toBeFalsy();
  });

  test('Connected Component Count Joint', () => {
    let g: BfsGraph = GraphFactory.create(Inits.initDirectedGraph1(), GraphType.BFS) as BfsGraph;
    let graphNodes: Vertex[] = g.getNodes();
    let start: Vertex = graphNodes[0];
    g.bfs(start);
    let count = g.bfsConnectedComponents();
    expect(count).toBe(1);
  });

  test('Connected Component Count Disjoint', () => {
    let g: BfsGraph = GraphFactory.create(Inits.initUndirectedDisjointGraph(), GraphType.BFS) as BfsGraph;
    let graphNodes: Vertex[] = g.getNodes();
    let start: Vertex = graphNodes[0];
    g.bfs(start);
    let count = g.bfsConnectedComponents();
    expect(count).toBe(2);
  });

  test('Find path from A to B', () => {
    let g: BfsGraph = GraphFactory.create(Inits.initDirectedGraph1(), GraphType.BFS) as BfsGraph;
    let graphNodes: Vertex[] = g.getNodes();
    let start: Vertex = graphNodes[0];
    const from: Vertex = graphNodes[0];
    const to: Vertex = graphNodes[4];
    let trace: number[] = g.findPathBfs(from, to);
    let expectedTrace: number[] = [1, 2, 3, 4, 5];
    expect(trace).toEqual(expectedTrace);
  });
})
