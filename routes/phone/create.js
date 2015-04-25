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
    'SELECT * FROM Phone WHERE name="' + phone.name + '"',
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
        'INSERT INTO Specs (brand_id, release_date, purchase_date, network, OS, camera, memory, battery)' +
          'VALUES ("' + phone.brand_id + '","' + phone.release_date + '","' + phone.purchase_date +
          '","' + phone.network + '","' + phone.OS + '","' + phone.camera + '","' + phone.memory + '","' + phone.battery + '")',
        function (err, rows, fields) {
        	  console.log(rows);
        	  console.log(fields);
            console.log(err);
            res.json({error_code : 0});
            return;
          }
      );
    }
  );

};