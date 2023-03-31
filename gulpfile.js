'use strict';
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('./sass/**/*.scss')
   .pipe(concat('main.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./styles/'));
});

gulp.task('sass:watch', function () {
   gulp.watch('./sass/**/*.scss', ['sass']);
});