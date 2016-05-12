var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var pkg = require('./package.json');
var name = pkg.name;

module.exports = {
    entry: {
        main_home: './src/index.js',
        vendors: ['react', 'react-dom']
    },
    output: {
        path: './dist',
        filename: name + '.[hash:8].js',
        publicPath: 'https://sec-boss.static.xiaomi.net/' + name
    },
    devtools: 'eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url?limit=10240&name=img/[hash:8].[name].[ext]'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new HtmlWebpackPlugin({
            filename: '../html/index.html',
            template: './template/index.html'
        })
    ]
};