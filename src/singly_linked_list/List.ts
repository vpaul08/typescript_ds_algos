import { ListItem } from './ListItem';

export class List {
  head?: ListItem;
  tail?: ListItem;
  verbose: boolean;
  constructor(verbose: boolean = true) {
    this.verbose = verbose;
    this.log('List Initiated');
  }

  shift(item: ListItem): void {
    this.log(`Pushing to front ${item.value}`);
    if (this.empty()) {
      this.head = this.tail = item;
    } else {
      item.next = this.head;
      this.head = item;
    }
  }

  dequeue(): ListItem {
    let item: ListItem;
    if (this.empty()) {
      this.log('Sorry this list is empty');
    } else {
      item = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = undefined;
      } else {
        this.head = this.head.next;
      }
    }
    this.log(`Dequeue ${item.value}`);
    return item;
  }

  enqueuePush(item: ListItem): void {
    this.log(`Enqueue/Push ${item.value}`);
    if (this.tail === undefined) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
  }

  pop(): ListItem {
    let item: ListItem;
    if (this.empty()) {
      this.log('Sorry this list is empty');
    } else {
      item = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = undefined;
      } else {
        let ptr: ListItem | undefined = this.head;
        while (ptr.next !== this.tail) {
          ptr = ptr.next;
        }
        this.tail = ptr;
        this.tail.next = undefined;
      }
    }
    this.log(`Pop ${item.value}`);
    return item;
  }

  find(item: ListItem): number {
    this.log(`Finding... ${item.value}`);
    let index: number = -1;
    let ptr: ListItem = this.head;
    while (ptr != undefined) {
      index++;
      if (ptr !== item) {
        ptr = ptr.next;
      } else {
        return index;
      }
    }
    return -1;
  }

  erase(item: ListItem): void {
    this.log(`Erasing... ${item.value}`);
    if (this.head === undefined || this.head === this.tail) {
      this.head = this.tail = undefined;
      return;
    }

    let ptr: ListItem = this.head;
    let prev: ListItem;
    while (ptr != undefined) {
      if (ptr !== item) {
        prev = ptr;
        ptr = ptr.next;
      } else {
        if (prev === undefined) {
          this.head = ptr.next;
        } else {
          prev.next = ptr.next;
        }
        return;
      }
    }
    this.log('The item was not in the list.');
  }

  empty(): boolean {
    return this.head === undefined;
  }

  reverse(): void {
    this.log('Reversing...');
    if (this.empty() && this.head === this.tail) {
      return;
    }

    let ptr: ListItem = this.head;
    let prv: ListItem;
    let nxt: ListItem;
    this.tail = this.head;

    while (ptr !== undefined) {
      nxt = ptr.next;
      ptr.next = prv;
      prv = ptr;
      ptr = nxt;
    }
    this.head = prv;
  }

  nthItem(n: number): ListItem {
    if (n < 0) {
      return;
    }

    let ctr = 0;
    let ptr: ListItem = this.head;
    while (ptr != undefined && ctr < n) {
      ptr = ptr.next;
      ctr++;
    }

    if (ctr < n) {
      return;
    }

    return ptr;
  }

  nthLast(n: number): ListItem {
    if (n < 0) {
      return;
    }

    let ptr: ListItem = this.head;
    let ptrResult: ListItem = this.head;
    let ctrLast = 0;
    let ctrFirst = 0;
    while (ptr.next !== undefined) {
      ptr = ptr.next;
      ctrLast++;
      if (ctrLast - ctrFirst - 1 === n) {
        ctrFirst++;
        ptrResult = ptrResult.next;
      }
    }

    if (ctrLast - ctrFirst !== n) {
      return;
    }

    return ptrResult;
  }

  addBefore(itemRef: ListItem, item: ListItem) {
    this.log('TODO');
  }

  addAfter(itemRef: ListItem, item: ListItem) {
    this.log('TODO');
  }

  printAll(): void {
    this.log('Printing List...');
    if (this.empty()) {
      this.log('The list is empty!');
    } else {
      let ptr: ListItem | undefined = this.head;
      while (ptr !== undefined) {
        this.log(ptr.value);
        ptr = ptr.next;
      }
    }
  }

  size(): number {
    let ctr: number = 0;
    let ptr: ListItem | undefined = this.head;
    while (ptr !== undefined) {
      ctr++;
      ptr = ptr.next;
    }
    return ctr;
  }

  log(msg: any): void {
    if (this.verbose) console.log(msg);
  }
}
