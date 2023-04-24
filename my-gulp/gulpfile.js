import gulp from "gulp";

import { path } from "./gulp/config/path.js";


import {copy} from "./gulp/tasks/copy.js";

import {reset} from "./gulp/tasks/reset.js";

import {html} from "./gulp/tasks/html.js";

import {scss} from "./gulp/tasks/scss.js";
import { less } from "./gulp/tasks/less.js";


function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.less, less);

}


  

global.app = {
    path: path,
    gulp: gulp
}
const mainTasks = gulp.parallel(copy, html, scss, less)
const dev = gulp.series(reset, mainTasks, copy, watcher)


gulp.task('default', dev );