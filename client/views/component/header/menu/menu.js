module.exports = function (callback) {
  require('!style!css!less!./menu.less');
  var menuTpl = require('./menu.hbs');
  // var data = {
  //   title: 'Test menu'
  // };
  // return menuTpl(data);
  var requestUrl = sheep.apiUrl('header/menu');
  sheep.http(requestUrl, 'get', function (res) {
    if (res.success) {
      var data = {
        list: res.data.list
      };
      callback(
        menuTpl(data)
      );
    }
  });
};