import { Queue } from './Queue';
import { Vertex } from './Vertex';
import { Graph } from './Graph';

export class BfsGraph extends Graph {
  checkBipartite(start: Vertex): boolean {
    this.resetNodesSoft();
    start.setColorWhite();
    let queue: Queue = new Queue(false);
    queue.enqueuePush(start);
    while (!queue.empty()) {
      let current = queue.dequeue();
      current.setVisited();
      for (let adjItem of this.edgeNodes.get(current)) {
        if (adjItem.isUnvisited()) {
          adjItem.setVisited(); // Process edge
          queue.enqueuePush(adjItem);
          adjItem.complimentColor(current.getColor());
        } else {
          if (adjItem.getColor() === current.getColor()) {
            console.log(
              `The graph is not bipartite :( because color of current ${current.value} and adjacent ${adjItem.value} is ${adjItem.color}`,
            );
            return false;
          }
        }
      }
      current.setProcessed(); // Process vertex late
    }
    console.log('The graph is bipartite :)');
    return true;
  }

  bfs(start: Vertex, verbose: boolean = false): void {
    this.resetNodesSoft();
    let queue: Queue = new Queue(false);
    if (verbose) {
      console.log('Printing BFS...');
    }
    queue.enqueuePush(start);
    while (!queue.empty()) {
      let current = queue.dequeue();
      if (verbose) {
        current.print(); // Process vertex early
      }
      current.setVisited();
      for (let adjItem of this.edgeNodes.get(current)) {
        if (adjItem.isUnvisited()) {
          adjItem.setVisited(); // Process edge
          adjItem.bfsParent = current;
          queue.enqueuePush(adjItem);
        }
      }
      current.setProcessed(); // Process vertex late
    }
  }

  bfsConnectedComponents(): number {
    this.resetNodesSoft();
    let count: number = 0;
    for (let node of this.getNodes()) {
      if (node.isUnvisited()) {
        count++;
        this.bfs(node, false);
      }
    }
    console.log(`Connected components: ${count}`);
    return count;
  }

  findPathBfs(start: Vertex, end: Vertex): number[] {
    this.resetNodesSoft();
    this.bfs(start, false);
    let trace: number[] = [];
    this.findPathBfsRecursive(start, end, trace);
    if (trace.length > 0) {
      console.log('Found Path!');
    } else {
      console.log('Path not found!');
    }
    return trace;
  }

  findPathBfsRecursive(start: Vertex, end: Vertex, trace: number[] = []): void {
    if (end === undefined) {
      trace = [];
    } else if (start === end) {
      trace.push(start.value);
    } else {
      this.findPathBfsRecursive(start, end.bfsParent, trace);
      trace.push(end.value);
    }
  }
}
