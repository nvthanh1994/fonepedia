module.exports = function (req, res) {
    var image_id = req.params.image_id;
    var connection = require('./../../config/database').connection;
    connection.query(
        'DELETE ' +
        'FROM Image ' +
        'WHERE Image.image_id ="' + image_id + '" ',
        function (err, rows, fields) {
            console.log('Remove image');
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
            }
            res.json({error_code: 0});
        }
    );
};