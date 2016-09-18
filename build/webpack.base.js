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

module.exports = function () {
  return {
    devtool: '#cheap-eval-source-map',
    entry: [path.join(__dirname, '../doc/doc.js')],
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'index.[hash:8].js',
      publicPath: '/'
    },
    resolve: {
      alias: {
        component: path.resolve(__dirname, '../src/component'),
        util: path.resolve(__dirname, '../src/util'),
        src: path.resolve(__dirname, '../src')
      }
    },
    module: {
      preLoaders: [
        {test: /\.(js|vue)$/, loader: 'eslint', exclude: /node_modules/}
      ],
      loaders: [
        {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
        {test: /\.vue/, loader: 'vue'},
        {test: /\.doc/, loader: '../demo-loader/loader.js'},
        {
          test: /\.(gif|jpg|jpeg|png|bmp|svg|woff|woff2|eot|ttf)(\?.*)?$/,
          loader: 'url',
          query: {
            limit: 8912,
            name: 'static/resources/[name].[hash:8].[ext]'
          }
        },
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
      })
    ]
  }
}
