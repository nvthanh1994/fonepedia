module.exports = function (req, res) {
    var connection = require('./../../config/database').connection;
    var brand_name = req.body.brand_name;
    connection.query(
        'SELECT * FROM Brand WHERE brand_name="' + brand_name + '"',
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
                'INSERT INTO Brand (brand_name, numberOfPhone) VALUES ("' + brand_name + '","' + 0 + '")',
                function (err, rows, fields) {
                    console.log(err);
                    res.json({error_code: 0});
                    return;
                }
            );
        }
    );
}