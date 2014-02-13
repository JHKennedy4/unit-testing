var gulp = require("gulp"),
    clean = require("gulp-clean"),
    browserify = require("gulp-browserify"),
    sass = require("gulp-sass"),
    prefix = require("gulp-autoprefixer");//,
    /*
    jshint = require("gulp-jshint"),
    mocha = require("gulp-mocha"),
    refresh = require("gulp-livereload"),
    lr = require("tiny-lr"),
    rename = require("gulp-rename"),
    server = lr();
    */
/*
gulp.task("clean", function () {
    gulp.src(["../../static/bundle.js", "../../static/style.css"],
        {read: false})
    .pipe(clean({force: true}));
});

gulp.task("clean-scripts", function () {
    gulp.src("../../static/bundle.js", {read: false})
    .pipe(clean({force: true}));
});

gulp.task("clean-css", function () {
    gulp.src("../../static/style.css", {read: false})
    .pipe(clean({force: true}));
});
*/

gulp.task("scripts-dev"/*, ['clean-scripts']*/, function () {
    gulp.src("./index.js")
    .pipe(browserify({debug: true}))
    .pipe(gulp.dest('./bundle.js'));
});

gulp.task("scripts-dist", ['clean-scripts'], function () {
    gulp.src("./javascript/*.js")
    .pipe(browserify())
    .pipe(gulp.dest('../../static/bundle.js'));
});

gulp.task("style-dev", ['clean-css'], function () {
    gulp.src("./sass/*")
    .pipe(sass({
        includePaths: ["./public/sass/bourbon/", "./public/sass/neat/"],
        sourceComments: "map"
    }))
    .pipe(prefix("last 2 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest("../../static/style.css"));
    //.pipe(refresh(server));
});

gulp.task("style-dist", ['clean-css'], function () {
    gulp.src("./sass/*")
    .pipe(sass({
        includePaths: ["./public/sass/bourbon/", "./public/sass/neat/"],
    }))
    .pipe(prefix("last 2 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest("../../static/style.css"));
    //.pipt(refresh(server));
});

gulp.task('watch', function () {
    gulp.watch('javascript/*', ['clean-scripts', 'scripts-dev']);
    gulp.watch('sass/*', ['clean-css', 'style-dev']);
});

gulp.task("default", ['clean-scripts',
                      'clean-css',
                      'style-dev',
                      'scripts-dev',
                      'watch'
                     ]);

gulp.task("default", ['clean-scripts',
                      'clean-css',
                      'style-dist',
                      'scripts-dist'
                     ]);
