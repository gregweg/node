var fs = require('fs');

var content;
var lineCount = 0;
fs.readFile(process.argv[2], 'utf-8', function callback(err, data) {
  if (err) {
    throw err;
  }
  // Invoke the next step
  //countLines(content);
  lineCount = data.split('\n').length - 1;
  console.log(lineCount);
});

function countLines() {
  lineCount = content.split('\n').length - 1;
}

//console.log(lineCount);
