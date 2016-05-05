var fs = require('fs');
var path = require('path');

module.exports = function (filepath, filterString, callback) {
  fs.readdir(filepath, function (error, list) {
    if (error)
      return callback(error);

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterString;
    })

    callback(null, list);
  })
}

/*
function node_ls(filepath, ending) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(filepath, function (err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + ending)
        console.log(file);
    })
  });
}
*/
