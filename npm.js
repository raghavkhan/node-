// global command for npm is  -
// npm --version

//local dependency
// npm i <packageName>

//global dependency
// npm install -g <packagName>
// sudo npm install -g <packagName> (mac)

//for creating package.json
// first command - npm init
//second command - npm init -y

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
