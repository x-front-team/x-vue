const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const baseConfig = require('./webpack.base')

const config = Object.assign({}, baseConfig, {
  debug: false,
  output: {
    path: path.join(__dirname, '../doc-build'),
    filename: 'index.js',
    publicPath: ''
  },
})

config.module.loaders.push({
  test: /\.styl/,
  loader: 'style!css!postcss!stylus'
})
config.module.loaders.push({
  test: /\.css/,
  loader: 'style!css'
})

config.plugins.push(new HtmlWebpackPlugin({
  template: path.join(__dirname, '../doc/index.html'),
  filename: 'index.html'
}))
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
}))

module.exports = config
