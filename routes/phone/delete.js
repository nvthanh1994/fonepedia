module.exports = function (req, res) {
  var phone_id = req.params.id;

  var connection = require('./../../config/database').connection;

  // FIND Spes Of Phone
  connection.query(
    'SELECT * FROM spes WHERE spes.phone_id ="' + phone_id + '" ',
    function (err, rows, fields) {
        if (err) {
          console.log(err);
        }
        console.log('Spes find : ', rows);
        // DEC NumberOfPhone Of Brand Of Phone

        connection.query(
            'UPDATE Brand ' +
            'SET numberOfPhone = numberOfPhone - 1 ' +
            'WHERE brand_id =" ' + rows[0].brand_id + ' " ' ,
            function (err2, rows2, fields2) {
                if (err2) {
                    console.log(err2);
                }
            }
        );

      }
  );

  // REMOVE PHONE from Phone
  connection.query(
    'DELETE ' +
      'FROM Phone ' +
      'WHERE Phone.phone_id ="' + phone_id + ' " ',
    function (err, rows, fields) {
        console.log('Remove phone');
        if (err) {
          res.json({error_code: 1, msg: err.toString()});
          return;
        }
        res.json({error_code: 0});
      }
  );
};