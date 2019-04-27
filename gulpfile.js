var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')
    sourcemasps = require('gulp-sourcemaps')
    plumber = require('gulp-plumber');

gulp.task('styles', function() {
    return gulp.src('./sass/styles.scss')
    .pipe(plumber())
    .pipe(sourcemasps.init())
    .pipe(sass.sync())
    .pipe(autoprefixer({
        browsers: ['last 5 versions']
    }))
    .pipe(sourcemasps.write('./'))
    .pipe(gulp.dest('./scc'))
});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', gulp.series('styles'))
});