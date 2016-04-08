/**
 * product weebpack config file
 */

var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin')

var SOURCE_PATH = path.resolve(__dirname, 'src');
var BUILD_PATH = path.resolve(__dirname, 'assert');

module.exports = {
    entry: {
        index: path.resolve(SOURCE_PATH, 'index.js'),
        vendors: ['react', 'react-dom']
    },
    output: {
        filename: 'bundle.[hash:8].js',
        publicPath: 'views/promotion/assert/',
        path: BUILD_PATH
    },
    devtools: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url?limit=250000&name=img/[hash:8].[name].[ext]'
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
        // new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
        new HtmlWebpackPlugin({
            // template: 'src/indexTpl.html',
            filename: '../index.html'
        })
    ]
};