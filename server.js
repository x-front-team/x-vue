const express = require('express')
const webpack = require('webpack')

const config = require('./build/webpack.config.dev')

const app = express()
const compiler = webpack(config)

const serverOpts = {
  // noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}

app.use(require('webpack-dev-middleware')(compiler, serverOpts))
app.use(require('webpack-hot-middleware')(compiler))

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './dist/index.html'))
// })

app.listen(3333, '0.0.0.0', (err) => {
  if (err) {
    console.error(err)
    return
  }

  console.log('Listening at http://localhost:3333')
})

