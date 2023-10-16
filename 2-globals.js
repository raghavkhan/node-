// Globals  - No Window

// __dirname  -  path to current directory
// __filename  - file name
// require  - function to  use modules (common js)
// module - info about current module(file)
// process  -  info about env where the program is being executed
let count = 1;
setInterval(() => {
  console.log(`raghav ${count}`);
  count += 1;
}, 1000);
