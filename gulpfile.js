var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var reactify = require('reactify');
var reload = browserSync.reload;

gulp.task('clean', function(cb) {
    del(['build'], cb);
});

gulp.task('browserify', function() {
  gulp.src('src/scripts/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copyData', function() {
  gulp.src('src/data/*')
    .pipe(gulp.dest('dist/data/'));
});

gulp.task('copyStyles', function() {
  gulp.src('src/styles/*')
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('copyImages', function() {
  gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images/'));
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'dist'}, reload);
});

gulp.task('default', ['clean', 'build', 'serve']);

gulp.task('build', ['browserify', 'copy', 'copyData', 'copyStyles', 'copyImages']);
