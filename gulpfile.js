var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var haml = require('gulp-ruby-haml');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', function(e) { console.log(e.message);})) // Using gulp-sass
        .pipe(gulp.dest('dist/css'))
});

gulp.task('haml', function() {
    gulp.src('app/haml/**/*.haml', {read: false}).
    pipe(haml().on('error', function(e) { console.log(e.message); })).
    pipe(gulp.dest('dist/html'));
});

gulp.task('watch-scss', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('watch-haml', function() {
    gulp.src('app/haml/**/*.haml', {read: false}).
    pipe(watch('app/haml/**/*.haml')).
    pipe(haml().on('error', function(e) { console.log(e.message); })).
    pipe(gulp.dest('dist/html'));
});