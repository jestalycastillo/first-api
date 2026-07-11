const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Landing Page' }));
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'About Page' }));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Page Not Found' }));
    }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});