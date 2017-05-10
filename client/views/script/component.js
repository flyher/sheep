// (function () {
//     Component = function () { };
// })();

// fix bug in IE8 for bind function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// if (!Function.prototype.bind) {
//     Function.prototype.bind = function (oThis) {
//         if (typeof this !== 'function') {
//             // closest thing possible to the ECMAScript 5
//             // internal IsCallable function
//             throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
//         }

//         var aArgs = Array.prototype.slice.call(arguments, 1),
//             fToBind = this,
//             fNOP = function () { },
//             fBound = function () {
//                 return fToBind.apply(this instanceof fNOP
//                     ? this
//                     : oThis,
//                     aArgs.concat(Array.prototype.slice.call(arguments)));
//             };

//         if (this.prototype) {
//             // Function.prototype doesn't have a prototype property
//             fNOP.prototype = this.prototype;
//         }
//         fBound.prototype = new fNOP();

//         return fBound;
//     };
// }

// fix bug in IE8 for Array.prototype.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control
// if (!Array.prototype.filter) {
//   Array.prototype.filter = function(fun/*, thisArg*/) {
//     'use strict';

//     if (this === void 0 || this === null) {
//       throw new TypeError();
//     }

//     var t = Object(this);
//     var len = t.length >>> 0;
//     if (typeof fun !== 'function') {
//       throw new TypeError();
//     }

//     var res = [];
//     var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
//     for (var i = 0; i < len; i++) {
//       if (i in t) {
//         var val = t[i];

//         // NOTE: Technically this should Object.defineProperty at
//         //       the next index, as push can be affected by
//         //       properties on Object.prototype and Array.prototype.
//         //       But that method's new, and collisions should be
//         //       rare, so use the more-compatible alternative.
//         if (fun.call(thisArg, val, i, t)) {
//           res.push(val);
//         }
//       }
//     }

//     return res;
//   };
// }

// if (!Function.prototype.bind) {
//     Function.prototype.bind = function () {
//         var fn = this,
//             args = [].slice.call(arguments),
//             object = args.shift();
//         return function () {
//             return fn.apply(object, args.concat([].slice.call(arguments)));
//         };
//     };
// }
// if (!Array.prototype.filter) {
//     Array.prototype.filter = function (fun /*, thisp*/) {
//         var len = this.length;
//         if (typeof fun != "function")
//             throw new TypeError();
//         var res = new Array();
//         var thisp = arguments[1];
//         for (var i = 0; i < len; i++) {
//             if (i in this) {
//                 var val = this[i]; // in case fun mutates this
//                 if (fun.call(thisp, val, i, this))
//                     res.push(val);
//             }
//         }
//         return res;
//     };
// }

// cnblogs template code
(function () {
    // 当前是否处于创建类的阶段
    var initializing = false;
    Component = function () { };
    Component.extend = function (prop) {
        // 如果调用当前函数的对象（这里是函数）不是Class，则是父类
        var baseClass = null;
        if (this !== Component) {
            baseClass = this;
        }
        // 本次调用所创建的类（构造函数）
        function F() {
            // 如果当前处于实例化类的阶段，则调用init原型函数
            if (!initializing) {
                // 如果父类存在，则实例对象的baseprototype指向父类的原型
                // 这就提供了在实例对象中调用父类方法的途径
                if (baseClass) {
                    this._superprototype = baseClass.prototype;
                }
                this.init.apply(this, arguments);
            }
        }
        // 如果此类需要从其它类扩展
        if (baseClass) {
            initializing = true;
            F.prototype = new baseClass();
            F.prototype.constructor = F;
            initializing = false;
        }
        // 新创建的类自动附加extend函数
        F.extend = arguments.callee;

        // 覆盖父类的同名函数
        for (var name in prop) {
            if (prop.hasOwnProperty(name)) {
                // 如果此类继承自父类baseClass并且父类原型中存在同名函数name
                if (baseClass &&
                    typeof (prop[name]) === "function" &&
                    typeof (F.prototype[name]) === "function" &&
                    /\b_super\b/.test(prop[name])) {
                    // 重定义函数name - 
                    // 首先在函数上下文设置this._super指向父类原型中的同名函数
                    // 然后调用函数prop[name]，返回函数结果
                    // 注意：这里的自执行函数创建了一个上下文，这个上下文返回另一个函数，
                    // 此函数中可以应用此上下文中的变量，这就是闭包（Closure）。
                    // 这是JavaScript框架开发中常用的技巧。
                    F.prototype[name] = (function (name, fn) {
                        return function () {
                            this._super = baseClass.prototype[name];
                            return fn.apply(this, arguments);
                        };
                    })(name, prop[name]);
                } else {
                    F.prototype[name] = prop[name];
                }
            }
        }
        return F;
    };
})();
