/*
 *
 req.body:
 {
 "phone_id" : "4",
 "spes_id" : "6",
 "phone_name" : "iPhone5C",
 "brand_id" : "2",
 "release_date" : "2014-06-05",
 "purchase_date" : "2014-07-05",
 "network" : "3G",
 "OS" : "iOs 8.3",
 "camera" : "5mp",
 "memory" : "32GB",
 "battery" : "2cell"
 }
 *
 */

module.exports = function (req, res) {
    var phone = req.body;
    var connection = require('./../../config/database').connection;
    connection.query(
        'UPDATE Phone SET phone_name="' + phone.phone_name + '" ' +
        'WHERE phone_id =' + phone.phone_id,
        function (err, rows, fields) {
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
            }
            console.log(rows);
            connection.query(
                'UPDATE Spes ' +
                'SET brand_id = "' + phone.brand_id + '", ' +
                'release_date = "' + phone.release_date + '", ' +
                'purchase_date = "' + phone.purchase_date + '", ' +
                'network = "' + phone.network + '", ' +
                'OS = "' + phone.OS + '", ' +
                'camera = "' + phone.camera + '", ' +
                'memory = "' + phone.memory + '", ' +
                'battery = "' + phone.battery + '" ' +
                'WHERE spes_id = ' + phone.spes_id,
                function (err, rows, fields) {
                    if (err) {
                        res.json({error_code: 1, msg: err.toString()});
                        return;
                    }
                    res.json({error_code: 0});
                    return;
                }
            );
        }
    );

};