var gulp = require('gulp'),
  connect = require('gulp-connect'),
  stylus = require('gulp-stylus');

var rootDir = './';

gulp.task('connect', function(){
  connect.server({
    root: rootDir,
    port: 8080,
    livereload: true
  });
});

gulp.task('html', function() {
    gulp.src('./*.html')
      .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src('./*.css')
      .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./*.js')
      .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('css/*.css', ['css']);
    gulp.watch('js/*.js', ['js']);
    gulp.watch('*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);