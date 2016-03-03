const gulp = require('gulp');
const Server = require('karma').Server;
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat-util');
const minifyHTML = require('gulp-minify-html');
const templateCache = require('gulp-angular-templatecache');
// const jshint = require('gulp-jshint');

const custom_module_name = "jmj.diretivas";
const main_module = 'jmj-diretivas.js';
const js_header = '(function(){"use strict";';
const js_footer = '})();';
const templateName = 'template.js';

    const source = {
        templates: 'template/**/*.html',
        js: 'src/**/*.js',
        jsTest: '!src/**/*-spec.js',
        templateTemp: 'tmp/**/*.js',
        templateTempDev: 'tmp/**/*.js',
        toastr: 'node_modules/toastr/build/toastr.min.js'
    };

    const destiny = {
        dist: 'dist',
        distDev: 'distDev'
    };

    const temp = {
        tmp: 'tmp',
        tmpDev: 'temp-dev'
    };

    gulp.task('test',['js'], function (done) {
        new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    });

    gulp.task('tdd',['js'], function (done) {
        new Server({
            configFile: __dirname + '/karma.conf.js'
        }, done).start();
    });

    gulp.task('templates', function() {
        return gulp.src(source.templates)
            .pipe(minifyHTML( {empty: true} ))
            .pipe(templateCache(templateName, { module: custom_module_name }))
            .pipe(gulp.dest(temp.tmp));
    });

    gulp.task('js', ['templates'], function(){
       return gulp.src([source.js, source.jsTest, source.templateTemp])
           .pipe(minifyJS())
           .pipe(concat(main_module))
           .pipe(concat.header(js_header))
           .pipe(concat.footer(js_footer))
           .pipe(gulp.dest(destiny.dist))
    });

    gulp.task('production', ['test']);


    gulp.task('templates-developer', function() {
        return gulp.src(source.templates)
            .pipe(templateCache(templateName, { module: custom_module_name }))
            .pipe(gulp.dest(temp.tmpDev));
    });

    gulp.task('js-developer', ['templates-developer'], function(){
       return gulp.src([source.js, source.jsTest, source.templateTempDev])
           .pipe(concat(main_module))
           .pipe(concat.header(js_header))
           .pipe(concat.footer(js_footer))
           .pipe(gulp.dest(destiny.distDev))
    });

    gulp.task('test-developer',['js-developer'], function (done) {
        new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    });

    gulp.task('developer', ['test-developer']);

    // gulp.task('lint', function() {
    //   return gulp.src(source.js)
    //     .pipe(jshint())
    //     .pipe(jshint.reporter('default'));
    // });

gulp.task('default', ['developer', 'production']);
