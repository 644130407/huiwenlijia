'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var docUtil = require('amazeui-doc-util');
var browserSync = require('browser-sync');
var del = require('del');
var runSequence = require('run-sequence');
var reload = browserSync.reload;

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('copy', function() {
  return gulp.src('video.js/**')
    .pipe(gulp.dest('dist/docs/video.js'));
});

gulp.task('docs', function(){
  return gulp.src(['README.md', 'docs/*.md'])
    .pipe($.markedJson(docUtil.markedOptions))
    .pipe(docUtil.applyTemplate(null, {
      pluginTitle: 'Video.js Amaze UI Skin',
      pluginDesc: 'Video.js Amaze UI Skin',
      buttons: 'amazeui/videojs',
      head: '<link rel="stylesheet" href="video.js/amazeui.videojs.css"/>'
    }))
    .pipe($.rename(function(file) {
      file.basename = file.basename.toLowerCase();
      if (file.basename === 'readme') {
        file.basename = 'index';
      }
      file.extname = '.html';
    }))
    .pipe(gulp.dest(function(file) {
      if (file.relative === 'index.html') {
        return 'dist'
      }
      return 'dist/docs';
    }));
});

gulp.task('less', function() {
  return gulp.src('src/amazeui.videojs.less')
    .pipe($.less())
    .pipe($.autoprefixer({browsers: docUtil.autoprefixerBrowsers}))
    .pipe($.csso())
    .pipe(gulp.dest('./dist/docs/video.js'))
    .pipe(gulp.dest('./video.js'));
});

gulp.task('bundle', function() {
  var b = browserify({
    entries: 'test/main.js',
    basedir: './'
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('test'))
});

// Watch Files For Changes & Reload
gulp.task('serve', ['default'], function () {
  browserSync({
    notify: false,
    server: 'dist',
    logPrefix: 'AMP'
  }, function(err, bs) {
    console.log(bs.options.getIn(['urls', 'local']));
  });

  gulp.watch('dist/**/*', reload);
});

gulp.task('deploy', ['default'], function() {
  return gulp.src('dist/**/*')
    .pipe($.ghPages());
});

gulp.task('watch', function() {
  gulp.watch(['README.md', 'docs/*.md'], ['docs']);
  gulp.watch('src/*.less', ['less']);
});

gulp.task('default', function(cb) {
  runSequence('clean', ['copy', 'less', 'docs', 'watch'], cb);
});
