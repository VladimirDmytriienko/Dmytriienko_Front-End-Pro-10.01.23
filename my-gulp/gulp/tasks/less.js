import gulpLess from 'gulp-less';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';

export const less = () => {
  return app.gulp.src(app.path.src.less, { sourcemaps: true })
    .pipe(gulpLess())
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(app.gulp.dest(app.path.build.css))
}
