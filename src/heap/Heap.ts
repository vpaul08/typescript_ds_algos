export class Heap {
  private pq: number[];
  private size: number;
  private maxDigits: number;
  constructor() {
    this.size = 0;
    this.pq = [];
    this.maxDigits = 0;
  }

  public getHeight(): number {
    return Math.ceil(Math.sqrt(this.size + 1));
  }

  public parent(pos: number): number {
    let parentIndex = pos === 0 ? -1 : Math.floor((pos + 1) / 2) - 1;
    return parentIndex;
  }

  public childLeft(pos: number): number {
    return 2 * (pos + 1) - 1;
  }

  public childRight(pos: number): number {
    return 2 * (pos + 1);
  }

  public insert(n: number): void {
    if (n.toString().split('').length > this.maxDigits) this.maxDigits = n.toString().split('').length;
    this.pq[this.size++] = n;
    if (this.size > 1) {
      this.bubbleUp();
    }
  }

  public bubbleUp(): void {
    let ptr: number = this.size - 1;
    while (this.pq[ptr] < this.pq[this.parent(ptr)] && ptr > -1) {
      [this.pq[ptr], this.pq[this.parent(ptr)]] = [this.pq[this.parent(ptr)], this.pq[ptr]];
      ptr = this.parent(ptr);
    }
  }

  public bubbleDown(): void {
    let ptr: number = 0;
    while (ptr < this.size) {
      console.log(`Ptr: ${ptr}, size: ${this.size}`);
      let comparatorPos: number;
      if (this.childRight(ptr) < this.size)
        comparatorPos =
          this.pq[this.childLeft(ptr)] <= this.pq[this.childRight(ptr)] ? this.childLeft(ptr) : this.childRight(ptr);
      else comparatorPos = this.childLeft(ptr);

      console.log(`Comparing: ${ptr} > ${comparatorPos}`);
      if (this.pq[ptr] > this.pq[comparatorPos]) {
        console.log(`Comparison result: ${this.pq[ptr]} > ${this.pq[comparatorPos]}`);
        [this.pq[ptr], this.pq[comparatorPos]] = [this.pq[comparatorPos], this.pq[ptr]];
        ptr = comparatorPos;
      } else {
        break;
      }
    }
  }

  public print(): void {
    for (let i = 0; i < this.size; i++) {
      console.log(this.pq[i]);
    }
  }

  public printZeroAppended(n: number): string {
    let nStr = n.toString();
    while (nStr.length < this.maxDigits) nStr = '0' + nStr;
    return nStr;
  }

  public printFormatted(): void {
    for (let i = 0; i < this.getHeight(); i++) {
      let strArr: string[] = [];
      for (let j = 2 ** i - 1; j <= 2 * (2 ** i - 1) && j < this.size; j++) {
        strArr.push(this.printZeroAppended(this.pq[j]));
      }
      console.log(strArr.join('  '));
    }
  }

  public sort(): void {
    while (this.size > 0) {
      console.log(this.pq[0]);
      this.pq[0] = this.pq[this.size - 1];
      this.size--;
      this.bubbleDown();
      this.printFormatted();
    }
  }
}
