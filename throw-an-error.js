/** Fulfills challenge but won't be verified because the
  * result is compared against an exact stack trace for
  * some reason.
 **/
function parsePromised() {
  return new Promise((fulfill, reject) => {
    try {
      var json = JSON.parse(process.argv[2])
      fulfill(json)
    } catch (e) {
      reject(e);
    }
  });
}

parsePromised().then(null, console.log)