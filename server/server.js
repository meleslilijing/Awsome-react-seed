'use strict';

var http = require('http');
var path = require('path');
var util = require('util');

var express = require('express')

var colors = require('colors');

var pkg = require('../package.json');
var env = process.argv[2] || process.env.NODE_ENV;
var debug = 'production' !== env;
var viewDir = debug ? 'src' : 'assert';
var rootDir = path.join(__dirname, '../');
var staticDir = path.join(__dirname, '../'+(debug ? 'src' : 'assert'));

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

var webpack = require('webpack');
var webpackCfg = require('../webpack.dev.config.js');
var compiler = webpack(webpackCfg)
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware  = require("webpack-hot-middleware");

var app = express();

// logger
app.use(require('morgan')('short'));

app.use(devMiddleware(compiler, {
	noInfo: true, 
	publicPath: webpackCfg.output.publicPath
}))

app.use(hotMiddleware(compiler, {
	log: console.log,
	path: '/__webpack_hmr', 
	heartbeat: 10 * 1000
}))

app.get('/', function(req, res) {
	res.sendFile(staticDir + '/index.html');
})

var server = http.createServer(app);
server.listen(process.env.PORT || 8080, function() {
	var url = util.format('http://%s:%d', 'localhost', pkg.localServer.port);
	console.log('Listening at %s', url);
})
