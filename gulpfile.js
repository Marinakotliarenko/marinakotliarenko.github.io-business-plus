var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/*.scss', ['sass']);
});