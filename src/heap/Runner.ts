import { Heap } from './Heap';
export class Runner {
  public execute(): void {
    let t: Heap = this.initHeap();
    t.printFormatted();
    t.sort();
  }

  public initHeap(): Heap {
    let heap: Heap = new Heap();
    heap.insert(1);
    heap.insert(11);
    heap.insert(5);
    heap.insert(0);
    heap.insert(8);
    heap.insert(10);
    heap.insert(6);
    heap.insert(7);
    heap.insert(70);
    heap.insert(170);
    heap.insert(1010);
    heap.insert(1020);
    heap.insert(1030);
    heap.insert(1040);
    heap.insert(9);
    heap.insert(3);
    heap.insert(12);
    return heap;
  }
}
