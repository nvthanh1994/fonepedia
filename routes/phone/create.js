/*
*
  req.body: 
      {
          name : "",
          brand_id : "",
          release_date : "",
          purchase_date : "",
          network : "",
          OS : "",
          camera : "",
          memory : "",
          battery : ""
      }
*
*/

module.exports = function (req, res) {
  var phone = req.body;
  var connection = require('./../../config/database').connection;
  connection.query(
    'SELECT * FROM Phone WHERE phone_name="' + phone.name + '"',
    function (err, rows, fields) {
      if (err) {
        res.json({error_code : 1, msg : err.toString()});
        return;
      }
      if (rows.length !== 0) {
        res.json({error_code : 1, msg : 'This phone is already exist'});
        return;
      }
      connection.query(
        'INSERT INTO Spes (brand_id, release_date, purchase_date, network, OS, camera, memory, battery)' +
          'VALUES ("' + phone.brand_id + '","' + phone.release_date + '","' + phone.purchase_date +
          '","' + phone.network + '","' + phone.OS + '","' + phone.camera + '","' + phone.memory + '","' + phone.battery + '")',
        function (err, rows, fields) {
            if (err) {
              res.json({error_code : 1, msg : err.toString()});
              return;
            }
            connection.query(
              'INSERT INTO Phone (phone_name, spes_id)' +
                'VALUES ("' + phone.name + '","' + rows.insertId + '")',
              function (err2, rows2, fields2) {
                  if (err2) {
                    res.json({error_code : 1, msg : err.toString()});
                    return;
                  }
                  console.log(rows2);
                  res.json({error_code : 0});
                  return;
                }
            );
            connection.query(
              'UPDATE Brand ' +
                'SET numberOfPhone = numberOfPhone + 1 ' +
                'WHERE brand_id = ' + phone.brand_id,
              function (err2, rows2, fields2) {
                  if (err2) {
                    console.log(err2);
                  }
                }
            );
          }
      );
    }
  );

};