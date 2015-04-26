var debug = require('debug')('Hvac');

var express = require('express');

var routes = require('./routes/index');
var app = express();

require('./config/database').run();
require('./config/express')(app);


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');


app.post('/v1/api/login', routes.login);
app.post('/v1/api/signup', routes.signup);

app.post('/v1/api/brand', routes.brand.create);
app.get('/v1/api/brand', routes.brand.getAll);
app.get('/v1/api/brand/:id', routes.brand.get);

app.post('/v1/api/phone', routes.phone.create);

var FRONTEND = ['/', '/group/:id', '/login', '/logout', '/config'];
app.get(FRONTEND, function (req, res) {
    debug(req);
    res.render('index.html');
});


app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
