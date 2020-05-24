import { ListItem } from './ListItem';

export class ListNoTail {
  head: ListItem;
  constructor(item: ListItem) {
    this.head = item;
    console.log('List Initiated');
  }

  shift(item: ListItem) {
    console.log('TODO');
  }

  topFront() {
    console.log('TODO');
  }

  dequeue() {
    console.log('TODO');
  }

  enqueuePush(item: ListItem) {
    console.log('TODO');
  }

  topBack() {
    console.log('TODO');
  }

  pop() {
    console.log('TODO');
  }

  find(item: ListItem) {
    console.log('TODO');
  }

  erase(item: ListItem) {
    console.log('TODO');
  }

  empty() {
    console.log('TODO');
  }

  addBefore(itemRef: ListItem, item: ListItem) {
    console.log('TODO');
  }

  addAfter(itemRef: ListItem, item: ListItem) {
    console.log('TODO');
  }

  toString(): string {
    return `Head: ${this.head.toString()}`;
  }
}
