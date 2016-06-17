const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

function postcss() {
  return [
    autoprefixer({
      browsers: '> 1%'
    })
  ]
}

module.exports = {
  devtool: 'cheap-source-map',
  entry: [path.join(__dirname, '../doc/doc.js')],
  debug: true,
  output: {
    path: path.join(__dirname, '../doc-built'),
    filename: 'index.js',
    publicPath: 'doc-built/'
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, '../component'),
      util: path.resolve(__dirname, '../util'),
    }
  },
  module: {
    preLoaders: [
      { test: /\.(js|vue)$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue/, loader: 'vue' },
      { test: /\.styl/, loader: 'style!css!postcss!stylus' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.doc/, loader: '../demo-loader/loader' }
    ]
  },
  vue: {
    postcss: postcss
  },
  postcss: postcss,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
}
