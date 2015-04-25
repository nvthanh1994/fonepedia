exports.run = function () {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'sinhvien'
  });
  connection.connect();
  exports.connection = connection;
};

