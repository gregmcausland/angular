var gulp        = require('gulp');
var path        = require('path');
var concat      = require('gulp-concat');
var folder      = require('gulp-folders');
var exclude     = require('gulp-ignore').exclude;
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var ngAnnotate  = require('gulp-ng-annotate');
var traceur     = require('gulp-traceur');
var html2js     = require('gulp-html2js');
var cache       = require('gulp-cache');
var es          = require('event-stream');

var pathToFolder = 'js/src';

gulp.task('source', folder(pathToFolder, function(folder){
    return es.merge( getTmplStream(folder), getCodeStream(folder) )
        .pipe(sourcemaps.init())
            .pipe(traceur())
            .pipe(concat(folder + '.min.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
}));

gulp.task('prod', folder(pathToFolder, function(folder){
    return es.merge( getTmplStream(folder), getCodeStream(folder) )
        .pipe(traceur())
        .pipe(concat(folder + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
}));

function getTmplStream( folder ) {
    return gulp.src([ path.join(pathToFolder, folder, '**/*.directive.html') ])
        .pipe(html2js({
            outputModuleName: folder + '.tmpl',
            useStrict: true
        }));
}

function getCodeStream( folder ) {
    return codeStream = gulp.src([ path.join(pathToFolder, folder, '**/*.module.js'), path.join(pathToFolder, folder, '**/*.js') ])
        .pipe(exclude('*.spec.js'))
        .pipe(ngAnnotate());
}

gulp.task('watch', ['source'], function () {
    gulp.watch('js/**/*.js', ['source'])
});