module.exports = function (req, res) {
  var phone_id = req.params.id;
  var connection = require('./../../config/database').connection;
  connection.query(
    'DELETE ' +
      'FROM Phone ' +
      'WHERE Phone.phone_id = ' + phone_id + ' ',
    function (err, rows, fields) {
        if (err) {
          res.json({error_code : 1, msg : err.toString()});
          return;
        }
        res.json({error_code : 0});
        // connection.query(
        //   'UPDATE Brand ' +
        //     'SET numberOfPhone = numberOfPhone - 1 ' +
        //     'WHERE brand_id = ' + phone.brand_id,
        //   function (err2, rows2, fields2) {
        //       if (err2) {
        //         console.log(err2);
        //       }
        //     }
        // );
      }
  );
};