module.exports = function (res, callback) {
  require('!style!css!less!./header.less');
  var title = require('./title/title');
  var menu = require('./menu/menu');
  var headerTpl = require('./header.hbs');

  var data = {
    name: 'header',
    title: '',
    menu: ''
  }

  if (res !== null) {
    data.title = res.data.title;
    data.menu = res.data.menu;
    callback(headerTpl(data));
  } else {
    title(null, function (titleHtml) {
      data.title = titleHtml;
      menu(null, function (menuHtml) {
        data.menu = menuHtml;
        callback(headerTpl(data));
      });
    })
  }
};