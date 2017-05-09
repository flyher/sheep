module.exports = function (callback) {
  var titleTpl = require('./title.hbs');
  // var data = {
  //   logo: '',
  //   name: 'sheep',
  //   describe: ''
  // }
  // titleTpl(data);
  var requestUrl = sheep.apiUrl('header/title');
  sheep.http(requestUrl, 'get', function (res) {
    if (res.success) {
      var data = res.data;
      callback(
        titleTpl(data)
      );
    }
  });
};