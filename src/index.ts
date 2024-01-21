import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();

console.log(numbersSorter.collection);

const charactersCollection = new CharactersCollection("Xaba");
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();

console.log(stringSorter.collection);
