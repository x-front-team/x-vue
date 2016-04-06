var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require("autoprefixer")

function postcss() {
  return [
    autoprefixer({
      browsers: '> 1%'
    })
  ]
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['./example/index.js', 'webpack-hot-middleware/client'],
  debug: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  module: {
    preLoaders: [
      { test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue/, loader: 'vue' },
      { test: /\.scss/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' }
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
      template: path.join(__dirname, 'example/index.tmpl.html'),
      filename: 'index.html'
    })
  ]
}
