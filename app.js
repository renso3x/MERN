var express = require('express');

var app = express();

const config = require('./config/config')[app.get('env')];

require('./config/webpack')(app, config)
require('./config/express')(app, config)
require('./config/mongoose')(config)
require('./config/routes')(app)

module.exports = app;
