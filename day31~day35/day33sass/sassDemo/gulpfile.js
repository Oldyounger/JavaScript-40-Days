//编写gulp要做的任务
/*
	.sass  老版本  
		特点：语法特别严格
			<1>不能有分号
			<2>不能有大括号
		【注】通过严格的代码缩进完成代码规范。
	.scss  新版本
		特点：好用，和css语法基本一致
			<1>可以有分号
			<2>可以有大括号  兼容css所有的写法
*/


var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function(){
	return gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"));
})


var rename = require("gulp-rename");
var minifyCSS = require("gulp-minify-css");
gulp.task("sass2", function(){
	return gulp.src("scss/07注释.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("07注释.min.css"))
	.pipe(gulp.dest("dist/css"))
})


gulp.task("watch", function(){
	gulp.watch("scss/*.scss", ["sass"]);
})

gulp.task("default", ["watch"]);