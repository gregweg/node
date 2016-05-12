var express = require('express')
var app = express()

// Write a route that extracts data from query string in the 
// GET '/search' URL route,
// e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.

app.get('/search', function(req, res) {
  var query = req.query
  res.send(query)
})

app.listen(process.argv[2])
