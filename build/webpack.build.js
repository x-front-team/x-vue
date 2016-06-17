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
  entry: {
    app: path.join(__dirname, '../component/index.js')
  },
  externals: {
    'vue': 'vue'
  },
  debug: true,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'x-vue.js',
    library: 'XVue',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
      { test: /\.styl/, loader: 'style!css!postcss!stylus' }
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
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}
