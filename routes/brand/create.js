module.exports = function (req, res) {
    var connection = require('./../../config/database').connection;
    var brand_name = req.body.brand_name;
    var brand_id = req.body.brand_id;
    var logoUrl = req.body.logoUrl;
    var slogan = req.body.slogan;
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
                'INSERT INTO Brand (brand_name, brand_id, numberOfPhone, logoUrl, slogan) VALUES ("' + brand_name + '","' + brand_id + '","' + 0 + '","' + logoUrl + '","' + slogan +'")',
                function (err, rows, fields) {
                    console.log(err);
                    res.json({error_code: 0});
                    return;
                }
            );
        }
    );
}