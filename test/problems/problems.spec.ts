import {BfsGraph} from '../../src/graphs_unweighted/BfsGraph';
import {Vertex} from '../../src/graphs_unweighted/Vertex';
import {Inits} from '../../src/graphs_unweighted/Inits';
import {GraphFactory, GraphType} from '../../src/graphs_unweighted/GraphFactory';
import {Problem2} from '../../src/problems/Problem2';

describe('CFG', () => {
  let p: Problem2;
  beforeAll(() => {
    p = new Problem2();
  });

  test('Input 1', () => {
    let states: number[] = [1, 1, 1, 0, 1, 1, 1, 1];
    let days: number = 2;
    let result = p.cellCompete(states, days);
    let expectedOutput: number[] = [0, 0, 0, 0, 0, 1, 1, 0];
    expect(result).toEqual(expectedOutput);
  });

  test('Input 2', () => {
    let states: number[] = [1, 0, 0, 0, 0, 1, 0, 0];
    let days: number = 1;
    let result = p.cellCompete(states, days);
    let expectedOutput: number[] = [0, 1, 0, 0, 1, 0, 1, 0];
    expect(result).toEqual(expectedOutput);
  });
})
