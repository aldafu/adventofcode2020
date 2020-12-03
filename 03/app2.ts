import { readFileSync } from 'fs';

const input = readFileSync('./input').toString().split('\n');

const len = input[0].length;

const countTrees = (down, right) => {
  let treeCount = 0;
  for (let i = down, r = right; i < input.length; i += down, r += right) {
    if (r >= len) r = r % len;
    console.log(input[i], i, r, treeCount);
    if (input[i][r] === '#') {
      treeCount++
      console.log(`found tree at ${i} ${r}`);
    }
  }
  return treeCount;
}

console.log(`trees: ${countTrees(1, 1) * countTrees(1, 3) * countTrees(1, 5) * countTrees(1, 7) * countTrees(2, 1)}`);
