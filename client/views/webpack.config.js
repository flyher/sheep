var webpack = require('webpack');
var path = require('path');
// var ES5Shim4Webpack = require("shim4webpack");
module.exports = {
    entry: {
        home: [
            './home/home.js'
        ]
    },
    devtool: 'source-map',
    output: {
        // path: path.join(__dirname, "/dist"),
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
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
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
                // imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader?helperDirs[]=" + __dirname + '/js/helpers'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader'
            }
        ],
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
