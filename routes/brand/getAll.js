module.exports = function (req, res) {
  var connection = require('./../../config/database').connection;
  connection.query(
    'SELECT * FROM Brand order by name',
    function (err, rows, fields) {
      if (err) {
        res.json({error_code : 1, msg : err.toString()});
        return;
      }
      if (rows.length !== 0) {
        res.json({error_code : 0, brand : rows});
        return;
      }
      res.json({error_code : 1, msg : 'Have not brand'});
    }
  );
};