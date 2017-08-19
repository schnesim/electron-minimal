const gulp = require('gulp');
const runSequnce = require('run-sequence');
const atomElectron = require('gulp-atom-electron');
const symdest = require('gulp-symdest');
const runSeq = require('run-sequence');
const electron = require('gulp-atom-electron');

gulp.task('copy', () => {
  gulp.src('./index.html').pipe(gulp.dest('dist'))
  gulp.src('./main.js').pipe(gulp.dest('dist'))
  gulp.src('./script.js').pipe(gulp.dest('dist'))
})

gulp.task('electron:build:osx', () => {
    gulp.src(['dist/**/*'])
        .pipe(electron({
            version: '1.7.5',
            platform: 'darwin'
        }))
        .pipe(symdest('packages/osx'));
});

gulp.task('package', () => {
    return runSeq('copy', ['electron:build:osx'], );
});