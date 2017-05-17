module.exports = function (res, callback) {
  require('!style!css!less!./entries.less');
  var entriesTpl = require('./entries.hbs');

  var requestUrl = sheep.apiUrl('home/entries');
  if (res !== null) {
    callback(entriesTpl({
      list: res.data.list
    }));
  } else {
    sheep.http(requestUrl, 'get', function (res) {
      if (res.success) {
        callback(entriesTpl({
          list: res.data.list
        }));
      }
    });
  }
};