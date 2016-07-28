"use strict";

const gulp = require('gulp')
// const $ = require('gulp-load-plugins')()
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

const webpack = require('gulp-webpack')

gulp.task('default', ['test'])

/* TEST SETUP */
gulp.task('test-watch', ['test'], function () {
  gulp.watch(['component/**/*.js', 'test/**/*.js'], ['test'])
})

gulp.task('test', function (done) {

  const server = new Server({
    configFile: __dirname + '/build/karma.conf.js',
    singleRun: true
  }, function() {
    done()
  })

  server.start()
})

// publish to npm
gulp.task('npm-publish', function (done) {
  spawn('npm', ['publish'], { stdio: 'inherit' }).on('close', done)
})

// package
gulp.task('package', function () {
  return gulp.src('component/index.js')
    .pipe(webpack(require('./build/webpack.build')))
    .pipe(gulp.dest('dist'))
})

// package min
gulp.task('package-min', function () {
  return gulp.src('component/index.js')
    .pipe(webpack(require('./build/webpack.build.min')))
    .pipe(gulp.dest('dist'))
})

// package the css
gulp.task('package-css', function () {
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
gulp.task('clear-dist', function (done) {
  rimraf('./dist', done)
})

// bump
gulp.task('bump', function () {
  return gulp.src('package.json')
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest('./'))
})

gulp.task('add-header', function () {
  let pkg = require('./package.json');
  let banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

  return gulp.src(['dist/*.js', 'dist/*.css'])
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('dist/'))
})

gulp.task('publish', function (done) {
  runSequence('clear-dist', 'bump', 'package', 'package-min', 'add-header', 'npm-publish', function () {
    done()
  })
})


// make doc
gulp.task('build-doc', function () {
  return gulp.src('doc/doc.js')
    .pipe(webpack(require('./build/webpack.build.doc')))
    .pipe(gulp.dest('doc-built'))
})
