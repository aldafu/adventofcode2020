import { readFileSync } from 'fs';

const input = readFileSync('./input').toString().split('\n').map((l) => {
  const linesplit = l.split(':');
  const polsplit = linesplit[0].split(' ');
  const minmax = polsplit[0].split('-');
  return {
    pol: {
      char: polsplit[1],
      min: parseInt(minmax[0], 10),
      max: parseInt(minmax[1], 10),
    },
    pw: linesplit[1],
  };
});

const valid = input.reduce((validCount, cand) => {
  let cnt = 0;
  for (let i = 0; i < cand.pw.length; i++) {
    if (cand.pw[i] === cand.pol.char) cnt++;
  }
  // console.log(cand.pw, cand.pol.char, cnt);
  if (cnt >= cand.pol.min && cnt <= cand.pol.max) {
    // console.log(cand.pw, cand.pol.char, cnt, validCount + 1);
    return validCount + 1;
  }

  return validCount;
}, 0);

console.log(`there are ${valid} passwords that confirm to policy`);
