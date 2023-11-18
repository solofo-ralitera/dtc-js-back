import http from 'node:http';
import fs from 'node:fs';

const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;

  /*
  // JSON
  res.setHeader('Content-Type', 'application/json');
  const json = {  
    "employee": {  
        "name":       "sonoo",   
        "salary":      56000,   
        "married":    true  
    }  
  };
  res.end(JSON.stringify(json));
  */

  /*  
  // Image, https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
  fs.promises.readFile('./files/images.jpeg')
    .then(image => {
      res.setHeader('Content-Type', 'image/jpeg');
      res.end(image);
    });
  */
  
  /*
  // PDF, https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
  fs.promises.readFile('./files/sample.pdf')
    .then(pdf => {
      res.setHeader('Content-Type', 'application/pdf');
      res.end(pdf);
    });
  */

  /*
  // Query parameters
  const query = new URL(req.url, `http://${req.headers.host}`);
  res.setHeader('Content-Type', 'application/json');
  console.log(query.searchParams);
  res.end(JSON.stringify(query));
  */

  
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
