import * as _ from "lodash"

//remeber to install: npm install lodash
// And: npm install @types/lodash

let numbers: number[] = [1,2,4];

let shuffled = _.shuffle(numbers);

let reversed:Array<number> = _.reverse(shuffled)

console.log(reversed)