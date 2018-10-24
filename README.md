# Sheep

[![Build Status](https://travis-ci.org/flyher/sheep.svg?branch=dev_0.2)](https://travis-ci.org/flyher/sheep?branch=dev_0.2)
[![Release Version](https://img.shields.io/github/release/flyher/sheep.svg)](https://github.com/flyher/sheep/releases)
[![Issues](https://img.shields.io/github/issues/flyher/sheep.svg)](https://github.com/flyher/sheep/issues)
[![Software License](https://img.shields.io/github/license/flyher/sheep.svg)](https://github.com/flyher/sheep/blob/dev_0.2/LICENSE)

A front-end rendering solution , support IE6 , IE8 and modern browser

#### Version 0.2

1. rewrite all code

2. run in IE5,IE6,IE7,IE8 and modern browser success( fix issue [#1](https://github.com/flyher/sheep/issues/1))

3. support dom bind event

#### Install

start server
```shell
cd server
npm install
node app
```

start client
```shell
cd resources\views
npm install
npm start
```

release client
```shell
npm run release
```

install webpack version 1.13.2 , see the [issue](https://github.com/SamHwang1990/blog/issues/6) here
```shell
npm install webpack@1.13.2 --save-dev
```

open http://127.0.0.1:8889/home/home.html in your browser 

[demo](https://flyher.github.com/sheep/)

[demo theme](http://getbootstrap.com/examples/jumbotron-narrow/)

[es5 support](http://kangax.github.io/compat-table/es5/)

[IE8 webpack](https://segmentfault.com/a/1190000007699918)


jquery v1.83 have two CVE：

[CVE-2015-9251](https://nvd.nist.gov/vuln/detail/CVE-2015-9251)

[CVE-2016-10707](https://nvd.nist.gov/vuln/detail/CVE-2016-10707)

update: 2018-10-24

The issue will happen in Win10 when you execute `webpack -w` to package sheep:
```xml
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.entry should be one of these:
   object { <key>: non-empty string | [non-empty string] } | non-empty string | [non-empty string] | function
   -> The entry point(s) of the compilation.
   Details:
    * configuration.entry['home'] should be a string.
      -> The string is resolved to a module which is loaded upon startup.
    * configuration.entry['home'] should not be empty.
    * configuration.entry should be a string.
      -> An entry point without name. The string is resolved to a module which is loaded upon startup.
    * configuration.entry should be an array:
      [non-empty string]
    * configuration.entry should be an instance of function
      -> A Function returning an entry object, an entry string, an entry array or a promise to these things.
 - configuration.module has an unknown property 'loaders'. These properties are valid:
   object { exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, noParse?, rules?, defaultRules?, unknownContextCritical?, unknownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp?, strictExportPresence?, strictThisContextOnImports? }
   -> Options affecting the normal modules (`NormalModuleFactory`).
 - configuration.resolve.extensions[0] should not be empty.
   -> A non-empty string
 - configuration.resolveLoader has an unknown property 'fallback'. These properties are valid:
   object { alias?, aliasFields?, cachePredicate?, cacheWithContext?, descriptionFiles?, enforceExtension?, enforceModuleExtension?, extensions?, fileSystem?, mainFields?, mainFiles?, moduleExtensions?, modules?, plugins?, resolver?, symlinks?, concord?, unsafeCache?, useSyncFileSystemCalls? }
   -> Options for the resolver when resolving loaders
```

```shell
"release": "webpack -p --progress --colors"
```

You can add this to `package.json`

package

```shell
npm run release
```

#### Describe

兼容IE8的前端渲染方案有很多：

[React v0.14 及其以前版本](https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html)

Angualar v1.2 及其以前版本

Backbone

React 和 AngularJS 后续版本如果想支持，可以用 [polyfill](https://github.com/inexorabletash/polyfill) 和 [es5-shim](https://github.com/es-shims/es5-shim) 来解决，正如本项目一样，为了解决webpack打包中存在的IE8兼容问题，但是值得注意的是，本项目源码本身就支持IE8。


关于sheep的后期博文将在[我的博客](http://blog.99diary.com/2017/03/06/sheep)这篇文章中给出，这个项目仅仅是一个学习与探索的过程。


#### Tools

Build By Visual Studio Code

#### License

Code in sheep project is licensed under the GPL