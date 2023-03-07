const http = require('http')
const app = require('./App')


const server = http.createServer(app)
server.listen(3002 , ()=> console.log("server running") )


