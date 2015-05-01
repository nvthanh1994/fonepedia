module.exports = function (req, res) {
  var connection = require('./../../config/database').connection;

  var brand_id = req.body.brand_id;
  var brand_name = req.body.brand_name;
  var logoUrl = req.body.logoUrl || null;
  var slogan = req.body.slogan || null;
  console.log(brand_id+ " " + brand_name + "-------------------");
  connection.query(
    'SELECT * FROM Brand WHERE brand_id="' + brand_id + '"',
    function (err, rows, fields) {
      if (err) {
        res.json({error_code: 1, msg: err.toString()});
        return;
      }
      if (rows.length !== 0) {
        res.json({error_code: 1, msg: 'Brand is already exist'});
        return;
      }
      connection.query(
        'INSERT INTO Brand (`brand_id`, `brand_name`, `logoUrl`, `slogan`) VALUES ("' + brand_id + '","' + brand_name +'","' + logoUrl + '","' + slogan + '")',
          function (err, rows, fields) {
          console.log(err);
          res.json({error_code: 0});
          return;
        }
      );
    }
  );
};