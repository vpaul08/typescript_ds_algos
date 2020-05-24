import { Sort } from './Sort';
export class Runner {
  public execute(): void {
    const data: number[] = [2, 4, 2, 5, 76, 3, 21, 41, 51, 30];
    let sort: Sort = new Sort(data);
    console.log(`Input: ${data}`);
    console.log(`Output: ${sort.insertionSort()}`);
  }
}
