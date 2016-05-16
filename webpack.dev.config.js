var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        // necessary for hot reloading with IE:
        'webpack-hot-middleware/client?reload=true&timeout=20000&quiet=true',
        './src/index.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "url-loader?limit=10240"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({  // inject node variable
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
