module.exports = function (req, res) {
    var connection = require('./../../config/database').connection;
    var brand_id = req.params.id;
    connection.query(
        'SELECT * FROM phone WHERE phone_id!="dumb" and brand_id="' + id + '"',
        function (err, rows, fields) {
            console.log(err, rows);
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
            }
            if (rows.length !== 0) {
                res.json({error_code: 0, phones: rows});
                return;
            }
            res.json({error_code: 0, phones: []});
        }
    );
};