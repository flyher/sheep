var fs = require('fs');
exports.TopList = function (req, res) {
    fs.readFile('public/mock/tab/top.json', function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
}