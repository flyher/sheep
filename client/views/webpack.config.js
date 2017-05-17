var webpack = require('webpack');
var path = require('path');
// var ES5Shim4Webpack = require("shim4webpack");
module.exports = {
    entry: {
        common: [
            './script/lib/jquery-1.8.3.js',
            './node_modules/es5-shim',
            './node_modules/es5-shim/es5-sham.js',
            './script/common.js',
            './script/component.js',
        ],
        home: [
            './home/home.js'
        ]
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js",
        publicPath: 'http://localhost:8889/dist/'
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        // "jquery": "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            "_": "underscore",
            "handlebars": "handlebars"
        }),
        new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
        // 压缩混淆
        // 这里必须使用1.13.2的
        // https://github.com/SamHwang1990/blog/issues/6
        // https://github.com/xcatliu/react-ie8/issues/43

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                screw_ie8: false
            }
        })
        // new ES5Shim4Webpack({
        //     warnings: true,
        //     logContext: true
        // })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            // {
            //     test: /\.less$/,
            //     exclude: /\.useable\.css$/,
            //     loader: "style!css"
            // },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: "style!css"
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader?helperDirs[]=" + __dirname + '/script/helper'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham" //兼容IE8
            }
        ]
        // postLoaders: [
        //     {
        //         test: /\.js$/,
        //         loaders: ['es3ify-loader']
        //     }
        // ]
    },
    resolve: {
        extensions: ['', '.js', '.css'],
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules')
    },
    node: {
        fs: "empty"
    }
};
