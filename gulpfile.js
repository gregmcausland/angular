var gulp        = require('gulp'),
    path        = require('path'),
    concat      = require('gulp-concat'),
    folder      = require('gulp-folders'),
    exclude     = require('gulp-ignore').exclude,
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify'),
    ngAnnotate  = require('gulp-ng-annotate'),
    pathToFolder = 'js/src';

gulp.task('source', folder(pathToFolder, function(folder){
    return gulp.src([ path.join(pathToFolder, folder, '**/*.module.js'), path.join(pathToFolder, folder, '**/*.js') ])
        .pipe(exclude('*.spec.js'))
        .pipe(ngAnnotate())
        .pipe(sourcemaps.init())
            .pipe(concat(folder + '.min.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
}));

gulp.task('prod', folder(pathToFolder, function(folder){
    return gulp.src([ path.join(pathToFolder, folder, '**/*.module.js'), path.join(pathToFolder, folder, '**/*.js') ])
        .pipe(exclude('*.spec.js'))
        .pipe(ngAnnotate())
        .pipe(concat(folder + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
}));

gulp.task('watch', ['source'], function () {
  gulp.watch('js/**/*.js', ['source'])
})