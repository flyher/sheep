var fs = require('fs');
exports.GetInfo = function (req, res) {
    fs.readFile('public/mock/home/info.json', function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
}
exports.GetEntries = function (req, res) {
    fs.readFile('public/mock/home/entries.json', function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
}