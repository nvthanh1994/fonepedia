
module.exports = function (req, res) {
  var review = req.body;
  var connection = require('./../../config/database').connection;

  connection.query(
    // ======= UPDATE PHONE NAME ==========
    'UPDATE Review SET review_title="' + review.review_title + '", review_content=\'' + review.review_content + '\' ' +
      'WHERE review_id ="' + review.review_id + '"',
    function (err, rows, fields) {
        if (err) {
          res.json({error_code: 1, msg: err.toString()});
          console.log('Errr');
          return;
        }
        console.log('UPDATE Review SET review_title="' + review.review_title + '", review_content="' + review.review_content + '" ' +
        'WHERE review_id ="' + review.review_id + '"');
        res.json({error_code: 0});
      }
  );
};