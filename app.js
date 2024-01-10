const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    const version = "01";
    const currentDate = new Date().toLocaleString();
    
    res.end(`Hello World\nVersion: ${version}\nCurrent Date: ${currentDate}`);
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
