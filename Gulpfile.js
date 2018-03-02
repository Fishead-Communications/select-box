var
  gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename')
;

var options = {
  mangle: {
    reserved: ['$super','Selectbox','selectbox']
  },

  keep_fnames: true
};
/**=====================================================================================================================
 /**
 * @author Adrian Green
 */
gulp.task('default', function () {
  var destFolder = '.';
  var selectbox  = 'jquery.selectbox.js';
  gulp.src(selectbox)
    .pipe(gulp.dest(destFolder))
    .pipe(rename('jquery.selectbox.min.js'))
    .pipe(uglify(
      options
    ))
    .pipe(gulp.dest('.'));
});
