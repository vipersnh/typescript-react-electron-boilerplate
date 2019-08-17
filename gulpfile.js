const spawn = require('child_process').spawn;
const gulp = require('gulp');
const css = require('gulp-css');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const build_dir = "build/"

// 1. Copy the index.html as is
gulp.task('html', () => {  
    return gulp.src('public/index.html')
        .pipe(gulp.dest(build_dir));
});
// 2. Compile CSS file and move them to the app folder
gulp.task('css', function() { // 2.
    return gulp.src('src/**/*.css')
        .pipe(css())
        .pipe(gulp.dest(build_dir));
});

// 3. Compile TS files and move them to the app folder
gulp.task('ts', () => { // 3.
    return gulp.src(['src/**/*.ts', 'src/**/*.tsx', './*.tsx'])
        .pipe(tsProject())
        .js.pipe(gulp.dest(build_dir));
});

// 4. Start the electron process.
gulp.task('start', gulp.series(gulp.parallel(['html', 'css', 'ts']), () => { // 4.
    spawn(
        'node_modules/.bin/electron', 
        ['.'], 
        { stdio: 'inherit' }
    ).on('close', () => process.exit());
}));

// 5. Start the electron process.
gulp.task('compile', gulp.series(gulp.parallel(['html', 'css', 'ts'], function (done) { done() }), function (done) { done() }), function (done) { done() });


