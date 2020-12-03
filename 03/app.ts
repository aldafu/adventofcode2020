import { readFileSync } from 'fs';

const input = readFileSync('./input').toString().split('\n');

const len = input[0].length;
let treeCount = 0;

for (let i = 1, right = 3; i < input.length; i++, right += 3) {
  if (right >= len) right = right % len;
  console.log(input[i], i, right, treeCount);
  if (input[i][right] === '#') {
    treeCount++
    console.log(`found tree at ${i} ${right}`);
  }
}
console.log(`trees: ${treeCount}`);
