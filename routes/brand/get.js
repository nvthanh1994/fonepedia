module.exports = function (req, res) {
  var connection = require('./../../config/database').connection;
  var id = req.params.id;
  connection.query(
    'SELECT * FROM phone WHERE brand_id="' + id + '"',
    function (err, rows, fields) {
      if (err) {
        res.json({error_code : 1, msg : err.toString()});
        return;
      }
      if (rows.length !== 0) {
        res.json({error_code : 0, brand : rows[0]});
        return;
      }
      res.json({error_code : 1, msg : 'Brand is not exist'});
    }
  );
};