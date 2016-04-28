fs = require('fs');
http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding('utf8');
  //response.on("error", function (error) {
  //  console.error(error);
  //})
  response.on('error', console.error);
  //response.on("data", function (data) {
  //  console.log(data);
  //})
  response.on('data', console.log);
})
