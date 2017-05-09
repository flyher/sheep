module.exports = function (callback) {
  require('!style!css!less!./header.less');
  var title = require('./title/title');
  var menu = require('./menu/menu');
  var headerTpl = require('./header.hbs');

  // var data = {
  //   title: title,
  //   menu: menu,
  //   name: 'header'
  // }
  // return headerTpl(data);
  var data = {
    name: 'header',
    title: title,
    menu: menu
  }
  title(function (titleHtml) {
    data.title = titleHtml;
    menu(function (menuHtml) {
      data.menu = menuHtml;
      callback(headerTpl(data));
    });
  })
};