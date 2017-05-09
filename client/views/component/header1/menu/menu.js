module.exports = function (callback) {
    require('!style!csss!less!./menu.less');
    var menuTpl = require('./menu.hbs');

    var url = sheep.Json.ApiUrl('header/list');
    sheep.Json.sheep(url, function (res) {
        callback(menuTpl({
            list: res.data
        }));
    });
};