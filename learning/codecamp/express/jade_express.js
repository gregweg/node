var express = require('express')
var app = express()

// Create an Express.js app with a home page rendered by Jade template engine.
// The homepage should respond to /home.
// The view should show the current date using toDateString

app.set('view engine', 'jade')
app.set('views', process.argv[3])
//app.set('views', path.join(__dirname, 'template'))

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])
