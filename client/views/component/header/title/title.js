module.exports = function (res, callback) {
  var titleTpl = require('./title.hbs');
  var requestUrl = sheep.apiUrl('header/title');
  if (res !== null) {
    callback(titleTpl({
      describe: res.data.describe
    }));
  } else {
    sheep.http(requestUrl, 'get', function (res) {
      if (res.success) {
        callback(
          titleTpl(res.data.describe)
        );
      }
    });
  }
};