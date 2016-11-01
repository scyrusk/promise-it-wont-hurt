const http = require('q-io/http')
const serverURL = "http://localhost:1337"

http.read(serverURL).then((json) => {
  console.log(JSON.parse(json));
}).catch(console.error).done();