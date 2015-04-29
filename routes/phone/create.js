var async = require('async');

var featuresOfSpes =
    [
      'brand_id',
      'general_network',
      'general_announced',
      'general_status',
      'body_dim',
      'body_weight',
      'display_type',
      'display_size',
      'display_multitouch',
      'sound_type',
      'sound_speaker',
      'sound_jack',
      'memory_cardslot',
      'memory_internal',
      'data_wlan',
      'data_bluetooth',
      'data_usb',
      'data_other',
      'camera_primary',
      'camera_feature',
      'camera_video',
      'camera_secondary',
      'feature_os',
      'feature_chipset',
      'feature_gpu',
      'feature_sensors',
      'feature_radio',
      'feature_gps',
      'battery',
      'price'
    ];

module.exports = function (req, res) {
  var phone = req.body;
  var connection = require('./../../config/database').connection;
  connection.query(
    'SELECT * FROM Phone WHERE phone_name="' + phone.name + '"',
    function (err, rows, fields) {
      if (err) {
        res.json({error_code: 1, msg: err.toString()});
        return;
      }
      if (rows.length !== 0) {
        res.json({error_code: 1, msg: 'This phone is already exist'});
        return;
      }
      var query = '', values = '';
      async.waterfall([

        function (next) {
          connection.query(
            'INSERT INTO Phone (phone_name)' +
              'VALUES ("' + phone.phone_name + '")',
            function (err2, rows2, fields2) {
                if (err2) {
                  res.json({error_code: 1, msg: err.toString()});
                  next(null);
                  return;
                }
                console.log(rows2);
                next(null, rows2.insertId);
                return;
              }
          );
        },

        function (phone_id, next) {
          query = 'INSERT INTO Spes (phone_id';
          values = 'VALUES ("' + phone_id + '"';
          var indexLoop = 0;
          featuresOfSpes.forEach(function (feature) {
            if (phone[feature]) {
              query += ", " + feature;
              values += ', "' + phone[feature] + '"';
            }
            if (++indexLoop === featuresOfSpes.length) {
              query += ')';
              values += ')';
              next(null);
            }
          });
        },

        function (next) {
          console.log(query, values);
          connection.query(
            query + values,
            function (err, rows, fields) {
              if (err) {
                res.json({error_code: 1, msg: err.toString()});
                return;
              }
              connection.query(
                'UPDATE Brand ' +
                  'SET numberOfPhone = numberOfPhone + 1 ' +
                  'WHERE brand_id = ' + phone.brand_id,
                function (err2, rows2, fields2) {
                    if (err2) {
                      console.log(err2);
                      res.json({error_code : 1, msg : err.toString()});
                      next(null);
                    }
                    res.json({error_code : 0});
                    next(null);
                  }
              );
            }
          );
        }], function (err) {

      });
    }
  );
};