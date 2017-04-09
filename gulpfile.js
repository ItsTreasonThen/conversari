const gulp = require('gulp');
const sass = require('gulp-sass');
const input = './static/stylesheets/*.scss';
const output = './public/';
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(gulp.dest(output));
});