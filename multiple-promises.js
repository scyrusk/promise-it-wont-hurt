function all(first, second) {
  return new Promise((fulfill) => {
    var counter = 0
    retval = [null, null]
    var handlerMaker = (index) => {
      return (value) => {
        retval[index] = value
        if (++counter >= 2) {
          fulfill(retval)
        }
      }
    }

    first.then(handlerMaker(0))
    second.then(handlerMaker(1))
  })
}

all(getPromise1(), getPromise2()).then(console.log)