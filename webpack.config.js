/**
 * @file webpack config
 * @author zhangxuanjian(zhangxuanjian@baidu.com)
 */

var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var env = process.env.WEBPACK_ENV;
var LIBRARY_NAME = 'en2ch';
var OUTPUT_FILE_NAME = LIBRARY_NAME + '.js';
var plugins = [];

if ('build' === env) {
    plugins.push(new UglifyJsPlugin({
        minimize: true
    }));
    OUTPUT_FILE_NAME = LIBRARY_NAME + '.min.js';
}

var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: OUTPUT_FILE_NAME,
        library: LIBRARY_NAME,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: plugins
};

module.exports = config;
