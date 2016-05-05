var path = require('path')
var express = require('express')
var app = express()

// Apply static middleware to service index.html file without any routes
// Solution must listen on the por number supplied by process.argv[2]

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
