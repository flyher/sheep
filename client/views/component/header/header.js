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
    title(res.title, function (titleHtml) {
      data.title = titleHtml;
      menu(res.menu, function (menuHtml) {
        data.menu = menuHtml;
        callback(headerTpl(data));
      });
    })

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