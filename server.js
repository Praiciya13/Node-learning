const http = require('http');

//creating server
const server = http.createServer((req, res) => {
    console.log("Server created")

    //request key properties
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    //returing as plain text
    // res.setHeader('Content-Type', "text/plain")
    // res.write("Welcome to the page")

    //returing as html
        res.setHeader('Content-Type', "text/html")
    res.write("<h3>Welcome to the page</h3>")
    res.end()
})

//listen to server

server.listen(3000, 'localhost', () => {
    console.log("Server start listening")
})

//to run server hit localhost:3000