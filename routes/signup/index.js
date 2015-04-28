var bcrypt = require('bcrypt-nodejs');

module.exports = function (req, res) {
    var connection = require('./../../config/database').connection;
    var username = req.body.username;
    var password = req.body.password;
    var hash_password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    connection.query(
        'SELECT * FROM User WHERE username="' + username + '"',
        function (err, rows, fields) {
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
            }
            if (rows.length !== 0) {
                res.json({error_code: 1, msg: 'Username is already exist'});
                return;
            }
            connection.query(
                'INSERT INTO User (username, password) VALUES ("' + username + '","' + hash_password + '")',
                function (err, rows, fields) {
                    console.log(err);
                    res.json({error_code: 0});
                    return;
                }
            );
        }
    );
};