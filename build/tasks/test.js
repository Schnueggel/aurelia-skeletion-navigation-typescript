var gulp = require('gulp');
var karma = require('karma');
var gulptypescript = require('gulp-typescript');
var compilerOptions = require('../typescript-options');
var paths = require('../paths');

// transpiles files in
// /test/unit/src/ from es6 to es5
// then copies them to test/unit/dist/
gulp.task('build-test', function () {
  return gulp.src(paths.unitSpecsSrc.concat(paths.dts))
    .pipe(gulptypescript(compilerOptions))
    .pipe(gulp.dest(paths.unitSpecsDist));
});

/**
 * Run test once and exit
 */
gulp.task('test', ['build-test', 'build-system'], function (done) {
    var server = new karma.Server({
      configFile: __dirname + '/../../karma.conf.js',
      singleRun: true
    }, done);
    server.start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    var server = new karma.Server({
       configFile: __dirname + '/../../karma.conf.js'
    }, done);
    server.start();
});

/**
 * Run test once with code coverage and exit
 */
gulp.task('cover', function (done) {
    var server = new karma.Server({
      configFile: __dirname + '/../../karma.conf.js',
      singleRun: true,
      reporters: ['coverage'],
      preprocessors: {
        'test/dist**/*.js': ['typescript'],
        'src/**/*.js': ['typescript', 'coverage']
      },
      coverageReporter: {
        type: 'html',
        dir: 'build/reports/coverage'
      }
    }, done);
    server.start();
});
