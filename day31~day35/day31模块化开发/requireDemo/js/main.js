console.log("加载完毕");
// 以下代码都要遵从AMD规范
/*
	管理，当前这个html页面引入的所有js代码的。
*/

/*//配置所有引入的js文件的路径
require.config({
	paths: {
		"addName": "demo/add"
	}
})

//调用add模块里面的函数
require(["addName"], function(addModule){
	//addModule 是引入的模块，对外暴露的接口

	alert(addModule.xxx(10, 20));
	addModule.yyy()
})*/

/*require(["demo/add"], function(addModule){
	//addModule 是引入的模块，对外暴露的接口

	alert(addModule.xxx(10, 20));
	addModule.yyy()
})*/

require.config({
	paths: {
		"add": "demo/add"
	}
})

require(["add"], function(add){
	alert(add.add(10, 20));
	add.m1()
})