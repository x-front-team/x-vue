// var path = require('path');
var express = require('express');
var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

var serverOpts = {
  // quiet: true,
  noInfo: true,
  // hot: true,
  // inline: true,
  // lazy: false,
  // stats: {colors: true},
  publicPath: config.output.publicPath
};

app.use(require('webpack-dev-middleware')(compiler, serverOpts));
app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './dist/index.html'))
// })

app.listen(3333, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return
  }

  console.log('Listening at http://localhost:3333')
});

