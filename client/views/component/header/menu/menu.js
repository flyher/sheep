module.exports = function (res, callback) {
  require('!style!css!less!./menu.less');
  var menuTpl = require('./menu.hbs');
  var requestUrl = sheep.apiUrl('header/menu');
  if (res !== null) {
    callback(menuTpl({
      list: res.data.list
    }));
  } else {
    sheep.http(requestUrl, 'get', function (res) {
      if (res.success) {
        callback(
          menuTpl({
            list: res.data.list
          })
        );
      }
    });
  }
};