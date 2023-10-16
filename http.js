const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write('welcome to our homepage');
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to  our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('brief history about us');
    return;
  }
  res.end(`<h1>oops!</h1><p>your request is nazaiz</p>`);
});

server.listen(5000);
