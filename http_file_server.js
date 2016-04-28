var http = require('http')
var fs = require('fs');

var server = http.createServer(function (req,res) {

  // Open file as a readable stream
  var readStream = fs.createReadStream(process.argv[3]);

  // This will wait until we know that the readable stream is actually valid before piping
  readStream.on('open', function() {
    // This just pipes the read stream to the response (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function() {
    res.end(err);
  });
})

server.listen(process.argv[2]);
