'use strict'
require('es6-promise')

var promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
});

promise.then(console.log);

console.log('MAIN PROGRAM');