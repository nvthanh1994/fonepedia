module.exports = function (req, res) {
  var review_id = req.params.id;
  var connection = require('./../../config/database').connection;
  connection.query(
    'SELECT * ' +
      'FROM Review ' +
      'WHERE review_id = "' + review_id + '"' +
      'ORDER BY phone_id',
    function (err, rows, fields) {
        if (err) {
          res.json({error_code: 1, msg: err.toString()});
          return;
        }
        if (rows.length !== 0) {
          res.json({error_code: 0, review: rows[0]});
          return;
        }
        res.json({error_code: 1, msg: 'Have not review'});
      }
  );
};