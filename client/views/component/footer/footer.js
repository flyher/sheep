module.exports = function () {
  require('!style!css!less!./footer.less');
  var footerTpl = require('./footer.hbs');
  return footerTpl({});
}