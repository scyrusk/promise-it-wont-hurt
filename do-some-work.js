const http = require('q-io/http')
const cache = "http://localhost:7000"
const db = "http://localhost:7001"

http.read(cache).then((userID) => {
  return http.read(db + "/" + userID)
}).then((json) => {
  console.log(JSON.parse(json))
}).catch(console.error).done();