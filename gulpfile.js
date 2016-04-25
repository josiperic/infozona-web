var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 versions']})
    ];
    return gulp.src('./styles/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./styles'));
});