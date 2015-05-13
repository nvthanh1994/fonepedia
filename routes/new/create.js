module.exports = function (req, res) {
    var connection = require('./../../config/database').connection;

    var new_title = req.body.new_title || null;
    var new_content = req.body.new_content || null;
    var new_avatar = req.body.new_avatar || 'http://localhost:8000/img/phones/new-default.png';
    var new_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    connection.query(
        'INSERT INTO New (`new_title`,`new_content`,`new_avatar`,`new_date`) VALUES (\'' + new_title + '\',\'' + new_content + '\',\'' + new_avatar + '\',\'' + new_date + '\')',
        function (err, rows, fields) {
            console.log(err);
            //console.log('INSERT INTO New (`new_title`,`new_content`,`new_avatar`,`new_date`) VALUES (\'' + new_title + '\',\'' + new_conent + '\',\'' + new_avatar + '\',\'' + new_date + '\')');
            res.json({error_code: 0});
            return;
        }
    );
};