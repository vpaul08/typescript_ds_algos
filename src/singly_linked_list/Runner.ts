import { List } from './List';
import { ListItem } from './ListItem';

export class Runner {
  execute(): void {
    let list: List = new List();
    list.enqueuePush(new ListItem(5));
    list.enqueuePush(new ListItem(6));
    list.printAll();
    let dequeuedItem: ListItem = list.dequeue();
    list.printAll();
    list.enqueuePush(new ListItem(7));
    list.enqueuePush(new ListItem(8));
    list.printAll();
    let poppedItem = list.pop();
    list.printAll();
    list.reverse();
    let toFind: ListItem = new ListItem(9);
    let toFind2: ListItem = new ListItem(90);
    list.enqueuePush(toFind);
    list.enqueuePush(new ListItem(10));
    list.printAll();

    // Nth

    let nth = 2;
    let nthItem = list.nthItem(nth);
    if (nthItem !== undefined) console.log(`Item ${nth} index from head is: ${nthItem.value}`);

    let nthLast = list.nthLast(nth);
    if (nthLast !== undefined) console.log(`Item ${nth} index from tail is: ${nthLast.value}`);

    // Find

    let index: number;

    index = list.find(toFind);
    if (index > -1) {
      console.log(`Item found at index: ${index}`);
    } else {
      console.log('Item not in list');
    }

    index = list.find(toFind2);
    if (index > -1) {
      console.log(`Item found at index: ${index}`);
    } else {
      console.log('Item not in list');
    }

    list.printAll();

    // Erase

    list.erase(toFind);
    list.printAll();
    list.erase(toFind2);
    list.printAll();
  }
}
