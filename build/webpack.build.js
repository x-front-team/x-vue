// const path = require('path')
// const webpack = require('webpack')
// const autoprefixer = require('autoprefixer')
// const pkg = require('../package.json')
//
// function postcss() {
//   return [
//     autoprefixer({
//       browsers: '> 1%'
//     })
//   ]
// }
//
// module.exports = {
//   devtool: 'cheap-source-map',
//   entry: {
//     app: path.join(__dirname, '../component/index.js')
//   },
//   externals: {
//     'vue': 'vue'
//   },
//   debug: true,
//   output: {
//     path: path.join(__dirname, '../dist'),
//     filename: 'x-vue.js',
//     library: 'XVue',
//     libraryTarget: 'umd',
//     umdNamedDefine: true
//   },
//   resolve: {
//     alias: {
//       component: path.resolve(__dirname, '../component'),
//       util: path.resolve(__dirname, '../util'),
//     }
//   },
//   module: {
//     preLoaders: [
//       { test: /\.(js|vue)$/, loader: 'eslint', exclude: /node_modules/ }
//     ],
//     loaders: [
//       { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
//       { test: /\.vue/, loader: 'vue' },
//       { test: /\.styl/, loader: 'style!css!postcss!stylus' }
//     ]
//   },
//   vue: {
//     postcss: postcss
//   },
//   postcss: postcss,
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         X_VUE_VERSION: '"' + pkg.version + '"',
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   ]
// }


const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const webpack = require('webpack')

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
  }
})

config.module.loaders.push({
  test: /\.styl/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
})
config.vue.loaders = {
  css: ExtractTextPlugin.extract('css'),
  stylus: ExtractTextPlugin.extract('css!stylus')
}


config.plugins.push(new ExtractTextPlugin('x-vue.css'))

module.exports = config
