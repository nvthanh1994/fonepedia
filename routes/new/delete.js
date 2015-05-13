module.exports = function (req, res) {
    var new_id = req.params.id;

    var connection = require('./../../config/database').connection;

    // REMOVE PHONE from Phone
    connection.query(
        'DELETE ' +
        'FROM New ' +
        'WHERE new_id ="' + new_id + ' " ',
        function (err, rows, fields) {
            console.log('Remove new');
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
            }
            res.json({error_code: 0});
        }
    );
};