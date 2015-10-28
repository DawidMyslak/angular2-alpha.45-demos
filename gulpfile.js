'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var tsc = require('gulp-typescript');
var del = require('del');
var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');
var open = require('open');

var PORT = 9000;

var PATHS = {
  src: {
    ts: 'src/**/*.ts',
    html: 'src/**/*.html',
    css: 'src/**/*.css'
  },
  dest: 'dist'
};

var tsProject = tsc.createProject('src/tsconfig.json', {
  typescript: require('typescript')
});

gulp.task('clean', function (done) {
  del([PATHS.dest], done);
});

gulp.task('ts', function () {
  var result = gulp.src(PATHS.src.ts)
    .pipe(plumber())
    .pipe(tsc(tsProject));

  return result.js
    .pipe(gulp.dest(PATHS.dest));
});

gulp.task('html', function () {
  return gulp.src(PATHS.src.html)
    .pipe(gulp.dest(PATHS.dest));
});

gulp.task('css', function () {
  return gulp.src(PATHS.src.css)
    .pipe(gulp.dest(PATHS.dest));
});

gulp.task('watch', function () {
  gulp.watch(PATHS.src.ts, ['ts']);
  gulp.watch(PATHS.src.html, ['html']);
  gulp.watch(PATHS.src.css, ['css']);
});

gulp.task('serve', function () {
  var app = connect().use(serveStatic(__dirname));
  http.createServer(app).listen(PORT, function () {
    open('http://localhost:' + PORT + '/' + PATHS.dest);
  });
});

gulp.task('play', ['ts', 'html', 'css', 'watch', 'serve']);

gulp.task('default', ['play']);