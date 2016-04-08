
module.exports = function(config) {
  config.set({

    logLevel: config.LOG_DISABLE,

    files: [
      // all files ending in "test"
      { pattern: 'component/**/*.js', included: false, served: true },
      '../test/test.js'
      // each file acts as entry point for the webpack configuration
    ],

    // frameworks to use
    frameworks: ['mocha'],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      '../test/test.js': ['webpack'],
      'component/**/*.js': [
        'coverage'
      ]
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: '../coverage/', subdir: '.' }
        // { type: 'text-summary', dir: 'coverage/', subdir: '.' },
        // { type: 'html', dir: 'coverage/' }
      ]
    },

    webpack: require('./webpack.config.test.js'),

    // webpack-dev-middleware configuration
    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ],

    browsers: ['PhantomJS']
  })
}
