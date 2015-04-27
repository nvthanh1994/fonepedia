exports.run = function () {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    // password : 'coc@123456',
    database : 'fonepedia'
  });
  connection.connect();
  exports.connection = connection;
};

