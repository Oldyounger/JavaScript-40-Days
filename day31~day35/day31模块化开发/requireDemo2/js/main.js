console.log("加载完成");

/*
	配置路径
*/
require.config({
	paths: {
		index: "index/index",
		drag: "demo/drag",
		scale: "demo/scale",
		range: "demo/range"
	}
})

//调用引入模块的函数，遵从AMD规范使用
require(["index"], function(index){
	index.index();
})