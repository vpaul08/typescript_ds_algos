class Grid {
  public x: number;
  public y: number;
  public cells: Cell[][];

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.cells = [];

    for (let i = 0; i < x; i++) {
      this.cells[i] = [];
      for (let j = 0; j < y; j++) {
        this.cells[i][j] = new Cell(i, j);
      }
    }

    this.colorCells();
  }

  public printGrid() {
    for (let i = 0; i < this.x; i++) {
      let line: string = '';
      for (let j = 0; j < this.y; j++) {
        line += `${this.cells[i][j].colorCode} `;
      }
      console.log(line);
    }
  }

  public colorCells() {
    for (let i = 0; i < this.x; i++) {
      this.cells[i][3].colorCode = 1;
      this.cells[i][5].colorCode = 1;
    }
  }

  public initFloodFill(x: number, y: number, newColor: number) {
    console.log('-------------------');
    let prevColor: number = this.cells[x][y].colorCode;
    if (prevColor === newColor) return;
    else {
      this.recurseFloodFill(x,y,newColor, prevColor);
    }
  }

  public recurseFloodFill(x: number, y: number, newColor: number, prevColor: number) {
    if (x < 0 || y < 0 || x >= this.x || y >= this.y) return;
    if (this.cells[x][y].colorCode !== prevColor) return;

    this.cells[x][y].colorCode = newColor;
    this.recurseFloodFill(x-1, y, newColor, prevColor);
    this.recurseFloodFill(x-1, y-1, newColor, prevColor);
    this.recurseFloodFill(x, y-1, newColor, prevColor);
    this.recurseFloodFill(x+1, y-1, newColor, prevColor);
    this.recurseFloodFill(x+1, y, newColor, prevColor);
    this.recurseFloodFill(x+1, y+1, newColor, prevColor);
    this.recurseFloodFill(x, y+1, newColor, prevColor);
    this.recurseFloodFill(x-1, y+1, newColor, prevColor);

  }
}

class Cell {
  public colorCode: number;
  public x: number;
  public y: number;

  constructor(x: number, y: number, colorCode: number = 0) {
    this.x = x;
    this.y = y;
    this.colorCode = colorCode;
  }
}

export class Problem3 {
  public execute() {
    let grid: Grid = new Grid(10,10);
    grid.printGrid();
    grid.initFloodFill(0, 4, 2);
    grid.printGrid();
  }
}
