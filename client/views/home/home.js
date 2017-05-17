var header = require('../component/header/header');
var footer = require('../component/footer/footer');

require('!style!css!less!../less/global.less');
require('!style!css!less!../less/common.less');

var info = require('./component/info/info');
var entries = require('./component/entries/entries');

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
    'entries',
    'footer'
  ],
  events: {
    // menu
    'menu': {
      '.menu-link click': 'menulinkClick' //点击链接事件，这里可以用a标签直接渲染，这个方法为了演示绑定事件触发
    },
    // info
    'info': {
      '.projectname click': 'projcenameClick',
      '.describe click': 'describeClick'
    }
  },
  render: function () {
    var self = this, headerData = new Object(), titleData = null, menuData = null, infoData = null;
    // mock data
    // 你也可以设置data为null，并启动sever，数据会从server ajax方式拿
    headerData.title = { "success": true, "data": { "logo": "logo.png", "projectname": "sheep", "url": "https://github.com/flyher/sheep", "describe": "A front-end rendering solution, support IE6, IE7, IE8 and modern browser" } };
    headerData.menu = { "success": true, "data": { "list": [{ "id": 1, "key": "home", "value": "Home", "url": "#" }, { "id": 2, "key": "about", "value": "About", "url": "https://github.com/flyher/sheep/blob/master/README.md" }, { "id": 3, "key": "github", "value": "Github", "url": "https://github.com/flyher/sheep" }, { "id": 4, "key": "blog", "value": "Blog", "url": "http://blog.99diary.com/2017/03/06/sheep" }] } };
    infoData = { "success": true, "data": { "projectname": "sheep", "url": "https://github.com/flyher/sheep", "describe": "A front-end rendering solution, support IE6, IE7, IE8 and modern browser" } };
    entriesData = { "success": true, "data": { "list": [{ "id": 1, "title": "Subheading", "describe": "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum." }, { "id": 2, "title": "Subheading", "describe": "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum." }, { "id": 3, "title": "Subheading", "describe": "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum." }, { "id": 4, "title": "Subheading", "describe": "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum." }, { "id": 5, "title": "Subheading", "descri6be": "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum." }, { "id": 6, "title": "Subheading", "describe": "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum." }] } };
    // 
    header(headerData, function (headerHtml) {
      $('.header_').html(headerHtml);//多次回调获取到渲染后的header的html
    });
    info(infoData, function (infoHtml) {
      $('.info_').html(infoHtml);
      self.regEvents('info', self);//1.渲染后直接注册事件
    });
    entries(entriesData, function (entriesHtml) {
      $('.entries_').html(entriesHtml);
      // self.regEvents('entries', self);
    });
    footer(function (footerHtml) {
      $('.footer_').html(footerHtml);
    });
    // 2.也可以全部渲染完成注册事件
    self.regEvents('menu', self);
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
    // menu link的事件
    menu: {
      // 点击link
      menulinkClick: function () {
        var url = $(this).attr('attr-url');
        if (url !== '#') {
          window.open(url, '_blank');
        } else {
          alert('This page is home page!');
        }
      }
    },
    // info 中的事件
    info: {
      // 点击项目名称
      projcenameClick: function () {
        alert('You click the projectname');
      },
      // 点击描述信息
      describeClick: function () {
        alert('You click the descibe');
      }
    }
  }
});

var home = new Home('home');
home.render();