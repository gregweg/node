var nodels = require('./nodels.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

nodels(dir, filterStr, function(err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.setEncoding('utf8').forEach(function (file) {
    console.log(file)
  }) 
})
