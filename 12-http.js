const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('<h1>Welcome to our home page!</h1>')
    }
    if(req.url === '/about') {
        res.end('<h1>Welcome to our ABOUT page!</h1>')
    }
    res.end()
})
server.listen(5000)