module.exports = function (req, res) {
    var news = req.body;
    var new_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var connection = require('./../../config/database').connection;

    connection.query(
        // ======= UPDATE PHONE NAME ==========
        'UPDATE New SET new_title=\'' + news.new_title + '\', new_content=\'' + news.new_content + '\' ' + ', new_avatar=\''+news.new_avatar +'\' ' + ', new_date=\''+new_date +'\' ' +
        'WHERE new_id =\'' + news.new_id + '\'',
        function (err, rows, fields) {
            console.log( 'UPDATE New SET new_title=\'' + news.new_title + '\', new_content=\'' + news.new_content + '\' ' + ', new_avatar=\''+news.new_avatar +'\' ' +
            'WHERE new_id =\'' + news.new_id + '\'');
            if (err) {
                res.json({error_code: 1, msg: err.toString()});
                console.log('Errr');
                return;
            }
            res.json({error_code: 0});
        }
    );
};