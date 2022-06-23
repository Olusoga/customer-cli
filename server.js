const http = require('http');
const app = require('./app');

const server= http.createServer(app);

const port = Process.env.PORT||3030;

server.listen(port, ()=>{
    console.log(`server listen on ${port}`)
})


