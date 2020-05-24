/*
01                  1 
03              1   1   1   
09          1   2   3   2   1
27      1   3   6   7   6   3   1
81  1   4   10  16  19  16  10  4   1

*/
export class Problem1 {
  private h: number;
  private lastRowSum: number;

  constructor(h: number) {
    this.h = h;
    this.lastRowSum = 0;
  }

  public displayTree(): void {
    let totalLineLength: number = 2 * this.h + 1;
    for (let i = 0; i < this.h; i++) {
      let lineLength: number = 2 * i + 1;
    }
  }
}
