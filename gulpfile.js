// gulp
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// minify css
var cssnano = require('gulp-cssnano');
// implement sourcemaps
var sourcemaps = require('gulp-sourcemaps');
// Gulp live reloading
var browserSync = require('browser-sync').create();
// Gulp Parse build blocks
var useref = require('gulp-useref');
// compile js
var uglify = require('gulp-uglify');
// gulp Conditionally run a task
var gulpIf = require('gulp-if');
// gulp minify images
var imagemin = require('gulp-imagemin');

// Convert sass to css
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss') // this globs all .scss files found in folder/subfolders
    // Initializes sourcemaps
    .pipe(sourcemaps.init()) // this produces a sourcemaps at the bottom of our .css file for browser debugging
    .pipe(sass({
      errLogToConsole: true // this will log sass console errors in the terminal
     }))
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true // this will reload browserync everytime we modify a .scss file
    }))
});


// Browsersync Task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''  // were are using the root dir to server browserync
    },
  })
})


// Gulp watch syntax
gulp.task('watch', ['browserSync' , 'sass'], function(){
  gulp.watch('scss/**/*.scss', ['sass']); // globs .scss files for watching
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload); // watches all .html files found in the root dir
  gulp.watch('js/**/*.js', browserSync.reload); // globs .js files for watching
  console.log('To stop watching type control c'); // this will log a console message that instructs how to stop th gulp task
})

