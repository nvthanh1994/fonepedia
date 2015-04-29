module.exports = function (req, res) {
    var phone_id = req.params.id;
    var connection = require('./../../config/database').connection;
    connection.query(
        'SELECT * ' +
        'FROM Phone ' +
        'JOIN (Spes JOIN Brand On Spes.brand_id = Brand.brand_id) ' +
        'ON Phone.phone_id = Spes.phone_id ' +
        'WHERE Phone.phone_id = "' + phone_id + ' " ' +
        'ORDER BY Phone.phone_id',
        function (err, rows, fields) {
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
            }
            if (rows.length !== 0) {
                res.json({error_code: 0, phone: rows[0]});
                return;
            }
            res.json({error_code: 1, msg: 'Have not Phone'});
        }
    );
};