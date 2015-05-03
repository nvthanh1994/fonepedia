module.exports = function (req, res) {
  var review_id = req.params.id;

  var connection = require('./../../config/database').connection;

  // REMOVE PHONE from Phone
  connection.query(
    'DELETE ' +
      'FROM Review ' +
      'WHERE review_id ="' + review_id + ' " ',
    function (err, rows, fields) {
        console.log('Remove review');
        if (err) {
          res.json({error_code: 1, msg: err.toString()});
          return;
        }
        res.json({error_code: 0});
      }
  );
};