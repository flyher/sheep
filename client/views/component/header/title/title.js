module.exports = function (res, callback) {
  var titleTpl = require('./title.hbs');
  var requestUrl = sheep.apiUrl('header/title');
  if (res !== null) {
    callback(titleTpl({
      projectname: res.data.projectname
    }));
  } else {
    sheep.http(requestUrl, 'get', function (res) {
      if (res.success) {
        callback(
          titleTpl({
            projectname: res.data.projectname
          })
        );
      }
    });
  }
};