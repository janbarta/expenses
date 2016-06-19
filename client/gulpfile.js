var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src(['', 'src'])
    .pipe(webserver({
      livereload: true,
      open: false,
      proxies: [
        {
          source: '/api', target: 'http://localhost:3000'
        }
      ]
    }));
});

gulp.task('default', ['webserver']);