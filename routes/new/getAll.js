module.exports = function (req, res) {
    var connection = require('./../../config/database').connection;
    connection.query(
        'SELECT * ' +
        'FROM New ' +
        'ORDER BY new_id',
        function (err, rows, fields) {
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
            }
            if (rows.length !== 0) {
                res.json({error_code: 0, new: rows});
                return;
            }
            res.json({error_code: 1, msg: 'Have not new'});
        }
    );
};