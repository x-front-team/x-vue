var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task("default", ["test"]);

/* TEST SETUP */
gulp.task("test-watch", ['test'], function (done) {
    gulp.watch(['component/**/*.js', 'test/**/*.js'], ['test']);
});

gulp.task('test', function (done) {

  var server = new Server({
      configFile: __dirname + '/build/karma.conf.js',
      singleRun: true
  }, function(){
      done();
  })

  server.start()
});
