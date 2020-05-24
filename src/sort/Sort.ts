export class Sort {
  private data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  selectionSort(): number[] {
    let result: number[] = this.data;
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        if (result[i] > result[j]) {
          [result[j], result[i]] = [result[i], result[j]];
        }
      }
    }

    return result;
  }

  /*
  1. Place pointer in first place and start comparing next places iteratively
  2. If next item is smaller, look into the previous traversed array and place it in the right location
  3. Else move the pointer to the next item and goto step 1 
  */
  insertionSort(): number[] {
    let result: number[] = this.data;
    for (let i = 0; i < result.length; i++) {
      let j: number = i;
      while (result[j + 1] < result[j] && j > 0) {
        [result[j + 1], result[j]] = [result[j], result[j + 1]];
        j--;
      }
    }
    return result;
  }

  sort(): number[] {
    let result: number[] = this.data;
    return result;
  }

  swap(a: number, b: number): number[] {
    return [b, a];
  }
}
