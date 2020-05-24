import { Graph } from './Graph';
import {Inits} from './Inits';

export class Runner {
  execute(): void {
    this.executeDijkstra();
  }

  executePrims(): void {
    let g: Graph = new Graph(Inits.initGraph1());
    g.printGraph();
    g.generatePrimsTree();
    g.printTree();
  }

  executeDijkstra(): void {
    let g: Graph = new Graph(Inits.initGraph1());
    g.runDijkstra();
    g.printGraph();
  }
}
