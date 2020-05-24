export class Vertex {
  id: number;
  minDistance: number;
  constructor(id: number) {
    this.id = id;
    this.minDistance = Number.MAX_SAFE_INTEGER;
  }
}
