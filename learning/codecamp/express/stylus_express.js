var express = require('express')
var app = express()
var stylus = require('stylus')

// Style your HTML with some Stylus middleware.
// Solution must listen on port supplied by process.argv[2]
// The path containing the HTML and Stylus files is provided in process.argv[3]
/*
The main.styl file:

    p
      color red

The index.html file:

    <html>
      <head>
        <title>expressworks</title>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
      </head>
      <body>
        <p>I am red!</p>
      </body>
    </html>
*/

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3])));

app.listen(process.argv[2])
