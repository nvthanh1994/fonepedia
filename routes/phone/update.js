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
    // ======= UPDATE PHONE NAME ==========
    'UPDATE Phone SET phone_name="' + phone.phone_name + '" ' +
      'WHERE phone_id ="' + phone.phone_id+'"',
    function (err, rows, fields) {
        if (err) {
          res.json({error_code: 1, msg: err.toString()});
          console.log('Errr');
          return;
        }
        //res.json({error_code: 0});
        async.waterfall([
          function (next) {
            // ======= UPDATE SPES ==========
            query = 'UPDATE Spes SET ';
            var indexLoop = 0;
            featuresOfSpes.forEach(function (feature) {
              if (phone[feature]) {
                if (indexLoop !== 0) {
                  query += ", ";
                }
                query += feature + '="' + phone[feature] + '" ';
              }
              if (++indexLoop === featuresOfSpes.length) {
                query += 'WHERE phone_id ="' + phone.phone_id + '"';
                next(null);
              }
            });
          },

          function (next) {
            connection.query(
              query,
              function (err, rows, fields) {
                if (err) {
                  res.json({error_code: 1, msg: err.toString()});
                  return;
                }
                res.json({error_code : 0});
              }
            );
          }], function (err) {
        });
      }
  );
};