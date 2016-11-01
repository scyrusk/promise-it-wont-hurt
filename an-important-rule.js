/** Fulfills challenge but won't be verified because the
  * result is compared against an exact stack trace for
  * some reason
 **/
const Q = require('q')

function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(first) {
  console.log(first)
  return first + 1
}

Q.fcall(iterate, 1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(console.log)
  .done();