const { readFile, writeFile } = require('fs');

readFile('./folder/first.txt', 'utf-8', (err, result) => {
  if (err) {
    return;
  }
  console.log(result);
  readFile('./folder/second.txt', 'utf-8', (err, result2) => {
    if (err) {
      return;
    }
    console.log(result2);
    writeFile(
      './folder/subFolder/write-async.txt',
      `${result} + ${result2}`,
      { flag: 'a' },
      (err, resultWrite) => {
        if (err) {
          return;
        }
        console.log(resultWrite);
      }
    );
  });
});
