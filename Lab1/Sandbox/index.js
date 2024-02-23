const _ = require('lodash');

console.log(_.isString('some text'));  // true
console.log(_.capitalize('hello world'));
console.log(_.kebabCase('Hello World'));
console.log(_.random(1, 100));
console.log(_.uniq([1, 2, 2, 3, 4, 4, 5]));