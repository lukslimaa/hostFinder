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
var flatten = require('gulp-flatten');
var browserSync = require('browser-sync'); // Reload the browser on file changes
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var ngmin = require('gulp-ngmin');
var Server = require('karma').Server;


/* just starting new project typescript */
var tsProject = ts.createProject({
});


// Tasks --------------------------------------------------- /


/* (1) Task to compile Sass file into CSS, and minify CSS into build directory */
gulp.task('styles', function() {
  gulp.src('./app/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/assets/css'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});


/* (2) Task to minify new or changed HTML pages */
gulp.task('templates', function() {
  gulp.src('./app/components/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(flatten())
    .pipe(gulp.dest('./www/assets/pages/templates'));
});

/* (3) Task to run JS hint */
gulp.task('jshint', function() {
  gulp.src('./assets/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});



/* (4) Uglify our js files.  */
gulp.task('uglify', function(){
	var tsResults = gulp.src(['./app/**/*.ts', '!./app/test/*.ts'])
		.pipe(sourcemaps.init())
		.pipe(tsProject());
	
	return tsResults.js.pipe(ngmin())
				.pipe(uglify({mangle: false}))
				.pipe(sourcemaps.write())
				.pipe(concat('ui-challenge-min.js'))
				.pipe(gulp.dest('./build/app'));
})

/* (5) Giving a ugly face to our css code. */
gulp.task('clean-css', function() {
  
  gulp.src('./www/assets/css/*.css')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./build/assets/styles/'));

  gulp.src('./www/assets/css/semantic/**/*')
    .pipe(gulp.dest('./build/assets/styles/semantic'))
});

/* (6) Translate typescript to JavaScript */
gulp.task('translate-to-js', function() {
	var tsResults = gulp.src('./app/**/*.ts')
	                    .pipe(sourcemaps.init())
	                    .pipe(tsProject());
    
	return tsResults.js.pipe(sourcemaps.write())
      .pipe(gulp.dest('./www/app'));
});


/* (7) Serve application */
gulp.task('serve', ['styles', 'templates', 'translate-to-js'], function() {
  browserSync.init({
    server: {
      baseDir: 'www'
    },
  });
});


/* (8) Watch changes while coding. */
gulp.task('watch', ['serve'], function() {
	gulp.watch('app/**/*.ts', ['translate-to-js']);
  gulp.watch('app/components/**/*.html', ['templates']);
  gulp.watch('app/sass/**/*.scss', ['styles']);

  gulp.watch('www/assets/pages/**/*.html', browserSync.reload);
  gulp.watch('www/app/**/*.js', browserSync.reload);
  gulp.watch('www/assets/css/**/*.css', browserSync.reload);
});

/* (9) Build our application */
gulp.task('build', ['uglify', 'clean-css'], function() {

  /* --- Copy all templates pages to our build folder --- */
  gulp.src('./app/components/**/*.html')
    .pipe(flatten())
    .pipe(gulp.dest('./build/assets/pages/templates'));
  /* ---------------------------------------------------- */

  /* --- Copy js libraries to the build folder --- */
  gulp.src('./www/assets/js/vendor/**/*.js')
    .pipe(gulp.dest('./build/assets/js/vendor'));
  
  gulp.src('./www/assets/libs/**/*')
    .pipe(gulp.dest('./build/assets/libs'));
  
  /* -----------------------------------------------*/

  /* --- Copy img folder -- */
  gulp.src('./www/assets/img/**/*')
    .pipe(gulp.dest('./build/assets/img'));
  /* ---------------------- */

  /* ---- Open up the project on browser ---- */
  browserSync.init({
    server:{
      baseDir: 'build'
    }
  });
  /* ----------------------------------------- */

});

gulp.task('test', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});