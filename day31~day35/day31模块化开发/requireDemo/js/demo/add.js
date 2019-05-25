//编写两个数相加的函数
//AMD规范声明函数，声明模块
define(function(){
	function add(x, y){
		return x + y;
	}
	function m1(){
		alert("我是m1");
	}

	//对外暴露的接口  xxx外部调用该函数的名字
	return {
		add: add,
		m1: m1
	}
})

