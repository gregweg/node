var express = require('express')
var fs = require('fs')
var app = express()

// Write a server that reads a file, parses it to JSON and outputs the content
// to the user.
// The port is passed in process.argv[2]. THe file name is passed inprocess.argv[3]
// Respond with: res.json(object)
// Everything should match the '/books' resource path


function readbooks() {
  var fileData;
  fs.readFile(process.argv[3], function(err, data) {
    if (err)
      throw err;

    fileData = JSON.parse(data)
  })
  return fileData
}

app.get('/books', function(req,res) {
//  var books = readbooks()
  var fileData;
  var fileName = process.argv[3]
  fs.readFile(fileName, function(err, data) {
    if (err)
      return res.sendStatus(500)
    fileData = JSON.parse(data)
    res.json(fileData)
  })
})

app.listen(process.argv[2])
