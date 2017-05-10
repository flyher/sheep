var header = require('../component/header/header');
var footer = require('../component/footer/footer');

require('!style!css!less!../less/global.less');
require('!style!css!less!../less/common.less');

var info = require('./component/info/info');

var Page = Component.extend({
  init: function (name) {
    this.name = name;
  }
});
var Home = Page.extend({
  init: function (name, hasShow) {
    this.name = name;
    this.hasShow = hasShow;
    // jquery plus init
  },
  tpls: [
    'menu',
    'title',
    'info',
    'footer'
  ],
  events: {
    'info': {
      '.projectname click': 'projcenameClick',
      '.describe click': 'describeClick'
    }
  },
  render: function () {
    var self = this;
    header(null, function (headerHtml) {
      $('.header_').html(headerHtml);//多次回调获取到渲染后的header的html
    });
    info(null, function (infoHtml) {
      $('.info_').html(infoHtml);
      self.regEvents('info', self);//注册事件
    });
    $('.footer').html(footer);
  },
  regEvents: function (tplName, params) {
    /// <summary>注册指定模板事件</summary>
    var self = this;
    var events = self.events;
    for (var i in events[tplName]) {
      var _DOMEventArray = i.split(' ');
      var _EventName = _DOMEventArray[_DOMEventArray.length - 1];
      var _DOMSelector = '';
      for (var j = 0; j < _DOMEventArray.length - 1; j++) {
        _DOMSelector = _DOMSelector + _DOMEventArray[j] + ' ';
      }
      var _DOMFunction = events[tplName][i];
      // $(_DOMSelector).bind(_EventName, params, self[_DOMFunction]);
      $(_DOMSelector).bind(_EventName, params, self.queryEvents[tplName][_DOMFunction]);
    }
  },
  regEvent: function (_DOMSelector, _EventName, _DOMFunction, params) {
    $(_DOMSelector).bind(_EventName, params, self[_DOMFunction]);
  },
  queryEvents: {
    info: {
      projcenameClick: function () {
        console.log('projcenameClick');
      },
      describeClick: function (d) {
        console.log('describeClick-' + d);
      }
    }
  }
});

var home = new Home('home');
home.render();