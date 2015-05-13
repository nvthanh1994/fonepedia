module.exports = function (req, res) {
    var new_id = req.params.id;
    var connection = require('./../../config/database').connection;
    connection.query(
        'SELECT * ' +
        'FROM New ' +
        'WHERE new_id = "' + new_id + '"',
        function (err, rows, fields) {
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
            }
            if (rows.length !== 0) {
                res.json({error_code: 0, new: rows[0]});
                return;
            }
            res.json({error_code: 1, msg: 'Have not review'});
        }
    );
};
// Get review tương ứng với phoneId