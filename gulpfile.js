'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');

var baseDir = "./src"
var targetDir = "./build"

gulp.task('imagemin', function() {
    return gulp.src(baseDir + '/images/**/*')
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(targetDir + '/images'))
})

gulp.task('image:small', function() {
    return gulp.src(baseDir + '/images/**/small/*')
    .pipe(imageResize({
        width : 333,
        upscale : false
    }))
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(targetDir + "/images"))
})
gulp.task('image:medium', function() {
    return gulp.src(baseDir + '/images/**/medium/*')
    .pipe(imageResize({
        width : 666,
        upscale : false
    }))
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(targetDir + "/images"))
})
gulp.task('image:large', function() {
    return gulp.src(baseDir + '/images/**/large/*')
    .pipe(imageResize({
        width : 1000,
        upscale : false
    }))
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(targetDir + "/images"))
})

gulp.task('image:hero', function() {
    return gulp.src(baseDir + '/images/**/hero/*')
    .pipe(responsive({
        '**/*.{jpg,jpeg,png}': [
            {
                width: 1000,
                rename: {suffix: "-mobile"}
            },
            {
                
            }
        ],
    }))
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(targetDir + "/images"))
})