module.exports = function (res, callback) {
  require('!style!css!less!./info.less');
  var infoTpl = require('./info.hbs');

  var requestUrl = sheep.apiUrl('home/info');
  if (res !== null) {
    callback(infoTpl({
      projectname: res.data.projectname,
      describe: res.data.describe
    }));
  } else {
    sheep.http(requestUrl, 'get', function (res) {
      if (res.success) {
        callback(infoTpl({
          projectname: res.data.projectname,
          describe: res.data.describe
        }));
      }
    });
  }
};