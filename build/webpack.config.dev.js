const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const defaultConfig = require('./webpack.base')

const config = Object.assign({}, defaultConfig, {
  entry: [path.join(__dirname, '../doc/doc.js'), 'webpack-hot-middleware/client?reload=true'],
  debug: true
})

config.module.loaders.push({ test: /\.styl/, loader: 'style!css!postcss!stylus' })
config.module.loaders.push({ test: /\.css/, loader: 'style!css' })

config.plugins.push(new webpack.optimize.OccurenceOrderPlugin())
config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.NoErrorsPlugin())
config.plugins.push(new HtmlWebpackPlugin({
  template: path.join(__dirname, '../doc/index.html'),
  filename: 'index.html'
}))

module.exports = config
