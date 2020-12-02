import { readFileSync } from 'fs';

const input = readFileSync('./input').toString().split('\n').map((l) => {
  const linesplit = l.split(':');
  const polsplit = linesplit[0].split(' ');
  const minmax = polsplit[0].split('-');
  return {
    pol: {
      char: polsplit[1],
      pos1: parseInt(minmax[0], 10),
      pos2: parseInt(minmax[1], 10),
    },
    pw: linesplit[1].trimLeft(),
  };
});

const valid = input.reduce((validCount, cand) => {
  const pos1 = cand.pw[cand.pol.pos1 - 1] === cand.pol.char;
  const pos2 = cand.pw[cand.pol.pos2 - 1] === cand.pol.char;
  // console.log(cand.pw, cand.pol.char, cnt);
  if ((pos1 && !pos2) || (!pos1 && pos2)) {
    console.log(cand.pw, cand.pw.length, cand.pol.char, cand.pol.pos1, cand.pw[cand.pol.pos1 - 1], pos1, cand.pol.pos2, cand.pw[cand.pol.pos2 - 1], pos2, validCount + 1);
    return validCount + 1;
  }

  return validCount;
}, 0);

console.log(`there are ${valid} passwords that confirm to policy`);
