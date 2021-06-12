const http = require('http');

const handleAllRequest = (request, response) => {
    console.log('I just recived a request')
    const url = request.url;
    switch (url) {
        case "/":
            response.write('<h1>Home Page</h1>')
            break;
        case "/login":
            response.write('<h1>Login Page</h1>')
        default:
            break;
    }
    response.end()
}

const server = http.createServer(handleAllRequest);

server.listen(8000, '127.0.0.1')