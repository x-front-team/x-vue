const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, '../test/test.js'),
  output: {
    path: path.resolve(__dirname, '../test'),
    filename: 'test.js'
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, '../component'),
      util: path.resolve(__dirname, '../util'),
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ],
    postLoaders: [
      {
        test: /\.*/,
        include: /component|example/,
        loader: 'istanbul-instrumenter'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  devServer: {
    contentBase: './test',
    noInfo: true
  },
  devtool: '#source-map'
}
