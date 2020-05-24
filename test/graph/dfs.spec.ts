import {Inits} from '../../src/graphs_unweighted/Inits';
import {GraphFactory, GraphType} from '../../src/graphs_unweighted/GraphFactory';
import {DfsGraph} from '../../src/graphs_unweighted/DfsGraph';

describe('DFS', () => {
  test('Topological Sort', () => {
    let g: DfsGraph = GraphFactory.create(Inits.initTopological2(), GraphType.DFS) as DfsGraph;
    let trace: number[] = g.dfsTopological();
    let expectedTrace: number[] = [ 6, 3, 4, 1, 2, 5, 7 ];
    expect(trace).toEqual(expectedTrace);
  });
})
