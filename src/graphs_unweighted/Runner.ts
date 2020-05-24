import { GraphFactory, GraphType } from './GraphFactory';
import { Inits } from './Inits';
import { Graph } from './Graph';

export class Runner {
  execute(): void {
    this.executeBasic();
  }

  executeBasic(): void {
    let g: Graph = GraphFactory.create(Inits.initVertexCover(), GraphType.BASIC);
    g.generateMatrices();
    g.printAllNodes();
    g.printGraph();
    g.printAdjMatrix();
    g.printNodeDegrees();
    g.printEdges();
    g.printIncMatrix();
    g.getIndependentSet();
    /*console.log(`Min Degree Node: ${g.getMinDegreeNode().value}`);
    g.getMinDegreeNode().degree = null;
    console.log(`Min Degree Node: ${g.getMinDegreeNode().value}`);*/
  }
}
