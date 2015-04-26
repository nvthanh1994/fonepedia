var bcrypt = require('bcrypt-nodejs');

module.exports = function (req, res) {
  var connection = require('./../../config/database').connection;
  var username = req.body.username;
  var password = req.body.password;
  connection.query(
    'SELECT * FROM User WHERE username="' + username + '"',
    function (err, rows, fields) {
      if (err) {
        res.json({error_code : 1, msg : err.toString()});
        return;
      }
      if (rows.length === 0) {
        res.json({error_code : 1, msg : 'Username is not exist'});
        return;
      }
      bcrypt.compare(password, rows[0].password, function (err, result) {
      	console.log(err);
      	console.log(result);
        if (result) {
          res.json({error_code : 0, user : rows[0]});
        } else {
          res.json({error_code : 1, msg : 'Password is incorrect'});
        }
      });
    }
  );
};