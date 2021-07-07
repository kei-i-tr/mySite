'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss') // コンパイル元となるsassファイルのパスを入れる
    .pipe(gulp.dest('./css')); // コンパイルで生成されるcssファイルの出力先となるパスを入れる
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass')); // コンパイル元となるsassファイルのパスを入れる
});