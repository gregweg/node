var express = require('express')
var bodyparser = require('body-parser')
var app = express()


// Write a route('/form') that process HTML form input
// (<form><input name="str"/></form> and prints backwards the str value

app.use(bodyparser.urlencoded({extended:false}))

app.post('/form', function(req,res) {
  res.end(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
