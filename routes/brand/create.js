module.exports = function (req, res) {
  var connection = require('./../../config/database').connection;
  var name = req.body.name;
  connection.query(
    'SELECT * FROM Brand WHERE name="' + name + '"',
    function (err, rows, fields) {
      if (err) {
        res.json({error_code : 1, msg : err.toString()});
        return;
      }
      if (rows.length !== 0) {
        res.json({error_code : 1, msg : 'Brand is already exist'});
        return;
      }
      connection.query(
        'INSERT INTO Brand (name, numberOfPhone) VALUES ("' + name + '","' + 0 + '")',
        function (err, rows, fields) {
          console.log(err);
          res.json({error_code : 0});
          return;
        }
      );
    }
  );
}