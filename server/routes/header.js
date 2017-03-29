var fs = require('fs');
exports.GetList = function (req, res) {
    fs.readFile('public/mock/header/list.json', function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
}