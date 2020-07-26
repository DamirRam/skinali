const gulp = require('gulp');
const browserSync = require('browser-sync');
const less = require('gulp-less');
const autoprefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');



// Compile less into CSS & auto-inject into browsers
gulp.task('less', function(done) {
     gulp.src('less/style.less')
    .pipe(less())
    .pipe(autoprefix())
    .pipe(minify())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());

     done();
});

gulp.task('serve', function(done) {
    browserSync.init({
        server: "../skinali"
    });
    gulp.watch("less/**/*.less", gulp.series('less'));
    gulp.watch("*.html").on('change', () => {
      browserSync.reload();
      done();
    });
    gulp.watch("js/*.js").on('change', () => {
      browserSync.reload();
      done();
    });
    done();
});

gulp.task('default', gulp.series('less', 'serve'));