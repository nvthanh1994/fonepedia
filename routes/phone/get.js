module.exports = function (req, res) {
  var phone_id = req.params.id;
  var connection = require('./../../config/database').connection;
  connection.query(
    'SELECT * ' +
      'FROM Phone ' +
      'JOIN (Spes JOIN Brand On Spes.brand_id = Brand.brand_id) ' +
      'ON Phone.spes_id = Spes.spes_id ' +
      'WHERE Phone.phone_id = ' + phone_id + ' ' +      
      'ORDER BY Phone.phone_name',
    function (err, rows, fields) {
        if (err) {
          res.json({error_code : 1, msg : err.toString()});
          return;
        }
        if (rows.length !== 0) {
          res.json({error_code : 0, phone : rows});
          return;
        }
        res.json({error_code : 1, msg : 'Have not Phone'});
      }
  );
};