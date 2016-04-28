var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file);
  })
});

  //for (var file in list) {
    //console.log(path.extname(list[file]));
  //  if (path.extname(list[file]) === '.' + extension) {
  //    console.log(list[file]);
  //  }
  //}
//for (var file in files) {
//  console.log(file);
//}
