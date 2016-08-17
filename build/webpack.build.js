const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const baseConfig = require('./webpack.base')

const config = Object.assign({}, baseConfig, {
  devtool: '',
  debug: false,
  entry: {
    app: path.join(__dirname, '../component/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'x-vue.js',
    library: 'XVue',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('x-vue.css'),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
})

config.module.loaders.push({
  test: /\.styl/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
})
config.vue.loaders = {
  css: ExtractTextPlugin.extract('css'),
  stylus: ExtractTextPlugin.extract('css!stylus')
}

module.exports = config
