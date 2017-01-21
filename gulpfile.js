var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify');

var paths = {
  sass: 'assets/scss/**/*.scss',
  //sassSource: 'sass/cru17.scss',
  cssDestination: './app/dist/css',
  js: 'js/src/**/*.*',
  //jsSource: 'js/src/cru17.js',
  jsDestination: './app/dist/js'
};

gulp.task('scripts', function(){

});

gulp.task('styles', function(){
  return gulp.src(paths.sass)
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest(paths.cssDestination))
      .pipe(notify('Styles Processed!'));
});

gulp.task('watch', function(){
  gulp.watch(paths.sass, ['styles']);
});

gulp.task('default', [ 'scripts', 'styles', 'watch' ]);