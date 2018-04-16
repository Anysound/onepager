var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autopref    = require('gulp-autoprefixer'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename');


gulp.task('sass', function() {
	return gulp.src('app/sass/main.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});



gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/sass/main.sass', ['sass'])
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
    
});

gulp.task('prefix', function() {
    gulp.src('app/css/main.css')
    .pipe(autopref({
    	browsers: ['last 2 versions'],
    	cascade: false
    }))
    .pipe(gulp.dest('dist'))
});


gulp.task('minjs', function() {
	return gulp.src('app/js/**/*.js')
	.pipe(concat('minimize.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'))
});

gulp.task('cssmin', function() {
    return gulp.src('app/css/mainper.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});