const http = require('http');

//creating server
const server = http.createServer((req, resp) => {
    console.log("Server created")
})

//listen to server

server.listen(3000, 'localhost', () => {
    console.log("Server start listening")
})

//to run server hit localhost:3000