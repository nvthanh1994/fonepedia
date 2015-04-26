exports.run = function () {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    // password : 'coc@123456',
    database : 'test'
  });
  connection.connect();
  exports.connection = connection;
};

