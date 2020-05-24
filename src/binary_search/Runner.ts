export class Runner {
  private search(a: number[], x: number): number {
    console.log(`Input array: ${a}, Input array length: ${a.length}`);
    let low: number = 0;
    let high: number = a.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      console.log(`Low: ${low}, High: ${high}, Mid: ${mid}`);
      if (x === a[mid]) {
        return mid;
      } else if (x < a[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return null;
  }

  public execute(): void {
    let a: number[] = [1, 2, 3, 4, 5, 6, 8, 9, 23, 35, 45, 243, 345, 365, 543];
    let b: number[] = [3, 45];

    let result = this.search(a, 365);
    console.log(result);
  }
}
