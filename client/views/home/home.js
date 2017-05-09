require('!style!css!less!./home.less');
var header = require('../component/header/header.js');
var Page = Component.extend({
  init: function (name) {
    this.name = name;
  }
});
var PageHome = Page.extend({
  init: function (name, hasShow) {
    this.name = name;
    this.hasShow = hasShow;
    // jquery plus init
  },
  events: {
    '#xxid': 'xxidClick'
  },
  render: function (_DOMSelector, callback) {
    // var headerHtml = header();
    // $(_DOMSelector).html(headerHtml);
    // callback();
    var headerHtml = '';
    header(function (headerHtml) {
      //  home, 阻塞ajax请求流程，因为get请求会造成页面卡住
      $(_DOMSelector).html(headerHtml);
    })
  },
  renderTpl: function (tplName, data, callback) {
    callback();
  },
  regEvents: function (params) {
    var self = this;
    var events = self.events;
    for (var i in events) {
      var _DOMEventArray = i.split(' ');
      var _EventName = _DOMEventArray[_DOMEventArray.length - 1];
      var _DOMSelector = '';
      for (var j = 0; j < _DOMEventArray.length - 1; j++) {
        _DOMSelector = _DOMSelector + _DOMEventArray[j] + ' ';
      }
      var _DOMFunction = events[i];
      $(_DOMSelector).bind(_EventName, params, self[_DOMFunction]);
    }
  },
  regEvent: function (_DOMSelector, _EventName, _DOMFunction, params) {
    $(_DOMSelector).bind(_EventName, params, self[_DOMFunction]);
  },
  xxidClick: function () {
    // todo
  }
});
var home = new PageHome('home');
home.render('.home', function () {
  home.init('home', false);
  home.regEvents(home);
});