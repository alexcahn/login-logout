var path = require('path');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/views/index.html'));
    });

    app.get('/login', function (rend, res) {
        res.sendFile(path.join(__dirname, '/views/login.html'));
    });
    app.get('/register', function (rend, res) {
        res.sendFile(path.join(__dirname, '/views/register.html'));
    });
    app.get('/dashboard', function (rend, res) {
        res.sendFile(path.join(__dirname, '/views/dashboard.html'));
    });
};