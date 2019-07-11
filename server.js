require('dotenv').config();
const cookieParser = require('cookie-parser');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cookieParser());

require('./htmlRoutes')(app);
require('./routes')(app);

app.listen(process.env.PORT || 9000);