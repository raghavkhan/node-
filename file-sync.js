const fs = require('fs');

const { readFileSync, writeFileSync } = fs;

const first = readFileSync('./folder/first.txt', 'utf-8');
const second = readFileSync('./folder/second.txt', 'utf-8');

writeFileSync(
  './folder/third.txt',
  `now I am not overriding new text ${first} ${second}`,
  { flag: 'a' }
);
