module.exports = function (req, res) {
  var connection = require('./../../config/database').connection;

  var phone_id = req.body.phone_id || null;
  var review_title = req.body.review_title || null;
  var review_content = req.body.review_content || null;
  var review_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  connection.query(
    'SELECT * FROM Phone WHERE phone_id="' + phone_id + '"',
    function (err, rows, fields) {
      if (err) {
        res.json({error_code: 1, msg: err.toString()});
        return;
      }
      if (rows.length === 0) {
        res.json({error_code: 1, msg: 'Phone is not exist'});
        return;
      }
      connection.query(
        'INSERT INTO Review (`phone_id`, `review_title`,`review_date`, `review_content`) VALUES ("' + phone_id + '","' + review_title + '",\'' + review_date + '\',\'' +  review_content + '\')',
        function (err, rows, fields) {
          console.log(err);
          //console.log('INSERT INTO Review (`phone_id`, `review_title`,`review_date`,`review_avatar`, `review_content`,) VALUES ("' + phone_id + '","' + review_title + '",\'' + review_date + '",\'' + review_avatar + '",\'' + review_content + '\')');
          res.json({error_code: 0});
          return;
        }
      );
    }
  );
};