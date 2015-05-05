module.exports = function (req, res) {
  var phone_id = req.params.phone_id;
  var connection = require('./../../config/database').connection;
  connection.query(
    'SELECT * ' +
      'FROM Image ' +
      'WHERE phone_id ="' + phone_id + '"',
    function (err, rows, fields) {
        if (err) {
          res.json({error_code: 1, msg: err.toString()});
          return;
        }
        if (rows.length !== 0) {
          res.json({error_code: 0, images: rows});
          return;
        }
        res.json({error_code: 0, images : []});
      }
  );
};