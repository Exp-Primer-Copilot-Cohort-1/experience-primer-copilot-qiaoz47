// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file

// Load the http module
var http = require('http');
var fs = require('fs');

// Create a web server
http.createServer(function (req, res) {
  if (req.url === '/comments.html') {
    fs.readFile('comments.html', function(err, data) {
      res.write(data);
      res.end();
    });
  }
}).listen(3000);

console.log('Server is running at http://localhost:3000/');