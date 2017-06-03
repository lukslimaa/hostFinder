var gulp = require('gulp');

// Sass dependencies
var sass = require('gulp-sass'); // Compile Sass into CSS
var cleanCSS = require('gulp-clean-css'); // Minify the CSS

// Minification dependencies
var htmlmin = require('gulp-htmlmin'); // Minify HTML
var concat = require('gulp-concat'); // Join all JS files together to save space
//var stripDebug = require('gulp-strip-debug'); // Remove debugging stuffs
var uglify = require('gulp-uglify'); // Minify JavaScript
//var imagemin = require('gulp-imagemin'); // Minify images

// Other dependencies
//var size = require('gulp-size'); // Get the size of the project
var browserSync = require('browser-sync'); // Reload the browser on file changes
//var jshint = require('gulp-jshint'); // Debug JS files
//var stylish = require('jshint-stylish'); // More stylish debugging
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var ngmin = require('gulp-ngmin');

/* just starting new project typescript */
var tsProject = ts.createProject({
});


// Tasks --------------------------------------------------- /


/* (1) Task to compile Sass file into CSS, and minify CSS into build directory */
gulp.task('styles', function() {
  gulp.src('./app/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/assets/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/styles/'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});


/* (2) Task to minify new or changed HTML pages */
gulp.task('templates', function() {
  gulp.src('./app/templates/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build/templates'));
});

/* (3) Task to run JS hint */
// gulp.task('jshint', function() {
//   gulp.src('./assets/scripts/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('jshint-stylish'));
// });



/* (4)  */
gulp.task('uglify', function(){
	var tsResults = gulp.src('./app/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));
	
	return tsResults.js.pipe(ngmin())
				.pipe(uglify({mangle: false}))
				.pipe(sourcemaps.write())
				.pipe(concat('ui-challenge-min.js'))
				.pipe(gulp.dest('./build/js'));
})


// gulp.task('compress', function() {
//   var tsResults = gulp.src('src/app/**/*.ts')
// 	                    .pipe(sourcemaps.init())
// 	                    .pipe(ts(tsProject));
//   return tsResults.js.pipe(uglify()).pipe(sourcemaps.write())
//     .pipe(concat('tomedescontos.js')).pipe(gulp.dest('WebContent/www/app'));
// });

gulp.task('scripts', function() {
	var tsResults = gulp.src('./app/**/*.ts')
	                    .pipe(sourcemaps.init())
	                    .pipe(tsProject());
    
	return tsResults.js
	                .pipe(sourcemaps.write())
	                .pipe(gulp.dest('./www/app'));
});


/* Serve application */
gulp.task('serve', ['styles', 'templates', 'scripts'], function() {
  browserSync.init({
    server: {
      baseDir: 'www',
    },
  });
});


// gulp.task('watch', ['scripts'], function() {
// 	gulp.watch('src/app/**/*.ts', ['scripts']);
// });