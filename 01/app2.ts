import { readFileSync } from 'fs';

const EXPECTED = 2020;
const input = readFileSync('./input').toString().split('\n').map(n => parseInt(n, 10));

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i === j) continue;
    for (let k = 0; k < input.length; k++) {
      if (j === k) continue;
      if (input[i] + input[j] + input[k] === EXPECTED) {
        console.log(`found ${input[i]} + ${input[j]} + ${input[k]} = ${EXPECTED}, so ${input[i]} * ${input[j]} * ${input[k]} = ${input[i] * input[j] * input[k]}`);
        process.exit();
      }
    }
  }
}
