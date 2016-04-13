const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

function postcss() {
  return [
    autoprefixer({
      browsers: '> 1%'
    })
  ]
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [path.join(__dirname, '../doc/doc.js'), 'webpack-hot-middleware/client'],
  debug: true,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, '../component')
    }
  },
  module: {
    preLoaders: [
      { test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue/, loader: 'vue' },
      { test: /\.scss/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
      { test: /\.css/, loader: 'style-loader!css-loader' },
      { test: /\.doc/, loader: '../demo-loader/loader' }
    ],
    postLoaders: [
      { test: /\.doc/, loader: '../demo-loader/loader?post' }
    ]
  },
  vue: {
    postcss: postcss
  },
  postcss: postcss,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../doc/index.html'),
      filename: 'index.html'
    })
  ]
}
