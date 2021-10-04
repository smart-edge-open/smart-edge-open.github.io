const gulp = require('gulp');
//const scss = require('gulp-sass');
const scss = require('gulp-sass')(require('sass'));

//const minifyJs = require('gulp-minify');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('assets/scss/**/*.scss')
    .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
    .pipe(gulp.dest('assets/css'))
})

gulp.task('clean', () => {
    return del([
        'assets/css',
    ]);
});

gulp.task('watch', () => {
    return gulp.watch('assets/scss/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    })
})

/* gulp.task('minifyJs', () => {
    return gulp.src('templates/cloverleaf/js/*')
    .pipe(minifyJs())
    .pipe(gulp.dest('templates/cloverleaf/jsMinified'))
}) */
