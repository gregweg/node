var bl = require('bl');
var http = require('http');
var results = [];
var count = 0;

function printResults() {
  for(var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function getHttp(index) {
  http.get(process.argv[2+index], function(response) {
    response.pipe(bl(function (err,data) {
      if (err)
        console.error(err);

      results[index] = data.toString();
      count++;

      if (count == 3) {
        printResults();
      }
    }))
  })
}

for (var j = 0; j < 3; j++) {
  getHttp(j);
}
