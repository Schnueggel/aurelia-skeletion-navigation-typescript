var gulp = require('gulp');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var gulptypescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../typescript-options');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
  var project = gulptypescript.createProject('tsconfig.json', compilerOptions);
  var tsResult = project.src()
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulptypescript(project));

    return tsResult.js.pipe(sourcemaps.write({includeContent: true}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html'],
    callback
  );
});
