var formidable = require('formidable'),
  util = require('util'),
  fs = require('fs-extra'),
  async = require('async'),
  url = require('url'),
  mime = require('mime');

var domain = 'http://localhost:8000';

var extension_image = ["jpeg", "jpg", "png", "csv", "bmp", "gif"];

var check_sizefile = function (filename, callback) {
  var fileSizeInKB = fs.statSync(filename).size / 1000.0;
  if (fileSizeInKB > 10000) {
    callback(0);
  } else {
    callback(1);
  }
};

module.exports = function (req, res) {

  try {
    var form = new formidable.IncomingForm();
    form.uploadDir = "./public/upload";

    form.parse(req, function (err, fields, files) {

      if (err) {
        res.write(JSON.stringify({error_code : 1, msg : err.toString()}));
        res.status(200).end();
        return;
      }

      if (Object.keys(files).length === 0) {
        res.json({error_code : 1, msg : 'No photo'});
        return;
      }
      var temp_path = files.image.path;
      var extension = mime.extension(files.image.type);

      if (!extension || extension_image.indexOf(extension.toLowerCase()) === -1) {
        res.json({error_code : 1, msg : 'extension of file is not support'});
        fs.unlink(temp_path, function (err) {
          if (err) {
            console.log(err);
          }
        });
        return;
      }

      check_sizefile(temp_path, function (ok) {
        if (!ok) {
          res.json({error_code : 1, msg : "Size of file is too large"});
          fs.unlink(temp_path, function (err) {
            if (err) {
              console.log(err);
            }
          });
          return;
        }

        var connection = require('./../../config/database').connection;

        var phone_id = fields.phone_id;
        connection.query(
          'SELECT * FROM Phone WHERE phone_id="' + phone_id + '"',
          function (err, rows, fields) {
            if (err) {
              res.json({error_code: 1, msg: err.toString()});
              return;
            }
            if (rows.length === 0 && phone_id!='dumb') {
              res.json({error_code: 1, msg: 'Phone is not exist'});
              return;
            }

            var file_name = Math.floor(Math.random() * 1000000 + 1) + new Date().getTime() + '.' + extension;
            var new_location = '/img/phones/';
            fs.rename(temp_path, './public' + new_location + file_name, function (err) {
              if (err) {
                console.log(err);
                return;
              }
              var imageUrl = domain + new_location  + file_name;
              connection.query(
                'INSERT INTO Image (`phone_id`, `imageUrl`) VALUES ("' + phone_id + '","' + imageUrl + '")',
                function (err, rows, fields) {
                  console.log(err);
                  res.json({error_code: 0, imageUrl : imageUrl});
                  return;
                }
              );
            })
          }
        );
      });
    });

    form.on('error', function (err) {
      console.log(err);
      res.json({error_code : 1, msg : err.toString()});
    });

    form.on('end', function (fields, files) {
    });
  } catch (err) {
    res.json({error_code : 1, msg : err.toString()});
  } finally {
  }
};