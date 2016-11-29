'use strict'

const gulp = require('gulp')
const Server = require('karma').Server
const spawn = require('child_process').spawn
const rimraf = require('rimraf')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const bump = require('gulp-bump')
const header = require('gulp-header')
const runSequence = require('run-sequence')
const babel = require('gulp-babel')

const webpack = require('gulp-webpack')

gulp.task('default', ['test'])

/* TEST SETUP */
gulp.task('test-watch', ['test'], () => {
  gulp.watch(['component/**/*.js', 'test/**/*.js'], ['test'])
})

gulp.task('test', (done) => {
  const server = new Server({
    configFile: __dirname + '/build/karma.conf.js',
    singleRun: true
  }, () => {
    done()
  })

  server.start()
})


gulp.task('copy-stylus', () => {
  return gulp.src('src/**/*.stylus')
    .pipe(gulp.dest('source'))
})

// copy vue files
gulp.task('copy-vue', () => {
  return gulp.src('src/**/*.vue')
    .pipe(gulp.dest('source'))
})

gulp.task('compile-js', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('source'))
})

// babel parse
gulp.task('source', (done) => {
  rimraf('./source', () => {
    runSequence('copy-vue', 'copy-stylus', 'compile-js', () => {
      done()
    })
  })
})

// publish to npm
gulp.task('npm-publish', (done) => {
  spawn('npm', ['publish'], { stdio: 'inherit' }).on('close', done)
})

// package
gulp.task('package', () => {
  return gulp.src('component/index.js')
    .pipe(webpack(require('./build/webpack.build')))
    .pipe(gulp.dest('dist'))
})

// package min
gulp.task('package-min', () => {
  return gulp.src('component/index.js')
    .pipe(webpack(require('./build/webpack.build.min')))
    .pipe(gulp.dest('dist'))
})

// package the css
gulp.task('package-css', () => {
  return gulp.src('style/index.styl')
    .pipe(stylus())
    .pipe(autoprefixer({ browsers: '> 1%' }))
    .pipe(rename('x-vue.css'))
    .pipe(gulp.dest('dist'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
})

// clear dist
gulp.task('clear-dist', (done) => {
  rimraf('./dist', done)
})

// bump
gulp.task('bump', () => {
  return gulp.src('package.json')
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest('./'))
})

gulp.task('add-header', () => {
  let pkg = require('./package.json')
  let banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n')

  return gulp.src(['dist/*.js', 'dist/*.css'])
    .pipe(header(banner, { pkg }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('pre-publish', (done) => {
  runSequence('clear-dist', 'source', 'bump', 'package', 'package-min', 'add-header', () => {
    done()
  })
})

gulp.task('publish', (done) => {
  runSequence('npm-publish', () => {
    done()
  })
})


// make doc
gulp.task('build-doc', () => {
  return gulp.src('doc/doc.js')
    .pipe(webpack(require('./build/webpack.build.doc')))
    .pipe(gulp.dest('doc-built'))
})
