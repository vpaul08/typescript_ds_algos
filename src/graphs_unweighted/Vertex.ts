enum States {
  unvisited,
  visited,
  processed,
}

enum Color {
  UNCOLORED = 'UNCOLORED',
  WHITE = 'WHITE',
  BLACK = 'BLACK',
}

export class Vertex {
  value: number;
  next?: Vertex;
  entryTime: number;
  exitTime: number;
  state: States;
  bfsParent: Vertex;
  dfsParent: Vertex;
  color: Color;
  visited: boolean;
  processed: boolean;
  depth: number;
  degree: number;

  constructor(value: number) {
    this.value = value;
    this.state = States.unvisited;
    this.color = Color.UNCOLORED;
    this.visited = false;
    this.processed = false;
    this.depth = 0;
    this.degree = 0;
  }

  setColorWhite(): void {
    this.color = Color.WHITE;
  }

  setColorBlack(): void {
    this.color = Color.BLACK;
  }

  resetColor(): void {
    this.color = Color.UNCOLORED;
  }

  complimentColor(color: Color): void {
    if (color === Color.WHITE) {
      this.color = Color.BLACK;
    } else {
      this.color = Color.WHITE;
    }
  }

  getColor(): Color {
    return this.color;
  }

  setUnvisited(): void {
    this.state = States.unvisited;
  }

  setVisited(): void {
    this.state = States.visited;
  }

  setVisitedBool(visited: boolean): void {
    this.visited = visited;
  }

  getVisitedBool(): boolean {
    return this.visited;
  }

  setProcessedBool(processed: boolean): void {
    this.processed = processed;
  }

  getProcessedBool(): boolean {
    return this.processed;
  }

  setProcessed(): void {
    this.state = States.visited;
  }

  isVisited(): boolean {
    return this.state === States.visited;
  }

  isProcessed(): boolean {
    return this.state === States.processed;
  }

  isUnvisited(): boolean {
    return this.state === States.unvisited;
  }

  print(): void {
    console.log(this.value);
  }
}
