var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var minifier = require('gulp-uglify/minifier');
var cssnano = require('gulp-cssnano');

// Optimizing CSS
gulp.task('minify', function () {
    return gulp.src('src/*.css')
        .pipe(cssnano()) // Minify CSS
        .pipe(autoprefixer({ // Add vendor-free css
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

/*
 * Build Sequences
 */

gulp.task('default', ['minify']);
