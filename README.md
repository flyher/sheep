# sheep
A front-end rendering solution , support IE6 , IE8 and modern browser



##### version 0.2

1. rewrite all code

2. run in IE5,IE6,IE7,IE8 and modern browser success( fix issue [#1](https://github.com/flyher/sheep/issues/1))


##### install

start server
```shell
cd server
npm install
node app
```

start client
```shell
cd resources\views
npm start
```

package code 
```shell
webpack -w
```

install webpack version 1.13.2 , see the [issue](https://github.com/SamHwang1990/blog/issues/6) here
```shell
npm install webpack@1.13.2 --save-dev
```

open http://127.0.0.1:8889/home/home.html in your browser 


[demo theme](http://getbootstrap.com/examples/jumbotron-narrow/)

[es5 support](http://kangax.github.io/compat-table/es5/)

[IE8 webpack](https://segmentfault.com/a/1190000007699918)



##### Tools

Build By Visual Studio Code

##### License

Code in sheep project is licensed under the GPL