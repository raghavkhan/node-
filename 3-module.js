// node uses commonJS library unnder the hood
// In CommonJs every file is module (by default)
// Modules - encapsulated code only share minimum

const { raghav, guddan } = require('./4-names');
const sayHihello = require('./utils');

console.log(sayHihello);

sayHihello('gargi');
sayHihello(raghav);
sayHihello(guddan);
