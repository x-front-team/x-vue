// const path = require('path')
// const webpack = require('webpack')
// const autoprefixer = require('autoprefixer')
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
//   entry: [path.join(__dirname, '../doc/doc.js')],
//   debug: true,
//   output: {
//     path: path.join(__dirname, '../doc-built'),
//     filename: 'index.js',
//     publicPath: 'doc-built/'
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
//       { test: /\.styl/, loader: 'style!css!postcss!stylus' },
//       { test: /\.css/, loader: 'style!css' },
//       { test: /\.doc/, loader: '../demo-loader/loader' }
//     ]
//   },
//   vue: {
//     postcss: postcss
//   },
//   postcss: postcss,
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     })
//   ]
// }

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
