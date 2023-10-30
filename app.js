import http2 from 'node:http2';
import cluster from 'node:cluster';
import {readFileSync} from 'node:fs';

const hostname = '127.0.0.1';
const port = 3000;
const numCPUs = 1;

let Counter = 0;

if (cluster.isPrimary) {
  console.log(`Primary pid ${process.pid} `);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // cluster.fork();
  });
} else {
  http2
    .createSecureServer({
      key: readFileSync('/home/solofo/.cert/key.pem'),
      cert: readFileSync('/home/solofo/.cert/cert.pem'),
    })
    .on('stream', (stream, headers) => {
      Counter++;
      stream.respond({
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        ':status': 200,
      });
      stream.end('Hello ');
    })
    .listen(port, hostname, () => {
      console.log(`Server running at https://${hostname}:${port}/`, process.pid);
    });
}

