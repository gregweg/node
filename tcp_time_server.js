var net = require('net');

// Listen to TCP connections provided by the first argument
// Each connection write the current date & 24 hour time in the format:
// YYYY-MM-DD hh:mm
// After sending the string closes connection

function zeroFill(num) {
  return (num < 10 ? '0' : '') + num
}

function getDate() {
  var date = new Date();
  //var month = (date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1));
  //var day = (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());

  //var hours = (date.getHours() > 9  ? date.getHours() : '0' + date.getHours());
  //var minutes = (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes());
  return date.getFullYear() + '-' 
	+ zeroFill(date.getMonth() + 1) + '-' 
	+ zeroFill(date.getDate()) + ' ' 
	+ zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes());
}

var server = net.createServer(function (socket) {
  var formattedDate = getDate();
  //socket handling logic
  //socket.write(data) // 
  socket.end(formattedDate + '\n') // closes socket
})
server.listen(process.argv[2]);
