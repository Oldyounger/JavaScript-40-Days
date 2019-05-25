/*
	编写给gulp的任务，告诉gulp到底应该干什么
*/
//引入gulp   用的是nodeJS的语法  CommonJS规范

var gulp = require("gulp");

/*
	gulp.task() 发布任务
	第一个参数： 任务的名字
	第二个参数： 回调函数
*/
gulp.task("hello", function(){
	console.log("hello world");
})


/*
	实现index.html的拷贝
	目的路径  dist/  如果没有该路径，会自动创建
*/
gulp.task("copy-html", function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

/*
	完成图片的拷贝
*/
gulp.task("images", function(){
	// return gulp.src("img/*.jpg").pipe(gulp.dest("dist/images"));

	// return gulp.src("img/*.{jpg,png}").pipe(gulp.dest("dist/images"));

	// return gulp.src("img/*/*").pipe(gulp.dest("dist/images"));

	//拷贝所有图片
	return gulp.src("img/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

/*
	将两个或者两个以上文件夹中的内容，拷贝到同一个目录里
*/
gulp.task("data", function(){
	return gulp.src(["xml/*.xml", "json/*.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

/*
	编译css代码的任务
	gulp-sass
*/
var sass = require("gulp-sass");
var minifyCSS = require("gulp-minify-css")
gulp.task("sass", function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})


/*
	一次性执行多个任务
	这里的多个任务是异步执行
*/
gulp.task("build", ["copy-html", "images", "data"]);

/*
	gulp 监听  
*/
gulp.task("watch", function(){
	gulp.watch("index.html", ["copy-html"]);
	gulp.watch("img/**/*", ['images']);
	gulp.watch(["xml/*.xml", "json/*.json"], ["data"]);
	gulp.watch(["js1/*.js", "js2/index3.js"], ["scripts"]);
	gulp.watch("stylesheet/index.scss", ['sass']);
})


/*
	index.js     开发版本
	index.min.js 上线版本
*/
//合并js文件
//压缩js文件
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
gulp.task("scripts", function(){
	return gulp.src(["js1/*.js", "js2/index3.js"])
	.pipe(concat("index.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("index.min.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})
/*
	gulp的插件如何去用

	步骤：
		1、下载插件到本地
		npm install gulp-xxx --save-dev
		npm i gulp-xxx -D
		2、通过 require(gulp-xxx)引入插件
		3、通过这个插件实现具体的功能
*/
var connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		// port:  设置端口号
		//设置实时刷新
		livereload: true
	})
})

//设置gulp默认任务 default
gulp.task("default", ["server", "watch"])