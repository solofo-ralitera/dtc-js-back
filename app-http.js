import http from 'node:http';
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  setTimeout(() => {
    res.write('["');
  }, 1000);
  setTimeout(() => {
    res.write('Hello ');
  }, 2000);
  setTimeout(() => {
    res.write(' World');
  }, 3000);
  setTimeout(() => {
    res.end('"]');
  }, 4000);  
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
