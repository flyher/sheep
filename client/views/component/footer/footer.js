module.exports = function (callback) {
  require('!style!css!less!./footer.less');
  var footerTpl = require('./footer.hbs');

  var year = new Date().getFullYear();

  callback(footerTpl({
    year: year
  }));
}