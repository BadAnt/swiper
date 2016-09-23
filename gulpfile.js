var gulp = require("gulp"),
    //minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify');

var paths = {
  css:['./css/*.css'],
  js:['./js/*.js'],
  jssize:['./libs/app.js'],
  html:['./*.html']
}
// gulp.task('css', function() {
//   gulp.src(paths.css)
//     .pipe(minifycss())
//     .pipe(rename({extname:'.min.css'}))
//     .pipe(gulp.dest('')) 
//     .pipe(livereload());
// });
gulp.task('connect', function() {
    connect.server({
      root:'./',
      port: 8888,
      livereload: true
    });
});

gulp.task('css', function() {
  return gulp.src('./default.css')
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src(paths.html)
    .pipe(connect.reload());
});

gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(connect.reload());
});

gulp.task('jssize', function() {
  return gulp.src('./libs/app.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('.libs/min'));
});

gulp.task('sass', function() {
  return gulp.src('./sass/default.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  // livereload.listen(); //要在这里调用listen()方法
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.jssize, ['jssize']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['connect','watch']);