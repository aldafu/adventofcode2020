import { readFileSync } from 'fs';

const EXPECTED = 2020;
const input = readFileSync('./input').toString().split('\n').map(n => parseInt(n, 10));

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i === j) continue;
    if (input[i] + input[j] === EXPECTED) {
      console.log(`found ${input[i]} + ${input[j]} = ${EXPECTED}, so ${input[i]} * ${input[j]} = ${input[i] * input[j]}`);
      process.exit();
    }
  }
}
