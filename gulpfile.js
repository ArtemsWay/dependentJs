'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('js', function () {
	return gulp.src([
		'./src/jquery.dependentJs.js'
	])
		.pipe(uglify())
		.pipe(rename('jquery.dependentJs.min.js'))
		.pipe(gulp.dest( './dist' ));
});

gulp.task('watch', function () {
  gulp.watch('./src/jquery.dependentJs.js', ['js']);
});

gulp.task('default', ['js']);