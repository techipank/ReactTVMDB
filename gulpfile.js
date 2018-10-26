const gulp = require('gulp');
const sass = require('gulp-sass');

const path = {
    buildPath:'./public/css/'
}

gulp.task('sass',function(){
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error',(error)=>console.log(error)))
    .pipe(gulp.dest(path.buildPath))
})

gulp.task('build', ['sass']);