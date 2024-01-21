import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();

console.log(numbersSorter.collection);

const charactersCollection = new CharactersCollection("Xaba");
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();

console.log(stringSorter.collection);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(-1);
linkedList.add(0);
linkedList.add(10);
linkedList.add(-5);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();

console.log(linkedListSorter.collection);
console.log(linkedList.print());
