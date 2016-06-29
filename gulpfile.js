'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// что бы запустить сервер: npm start

gulp.task('watcher', browserSync.reload);

gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

   gulp.watch("*", ['watcher']);
});
