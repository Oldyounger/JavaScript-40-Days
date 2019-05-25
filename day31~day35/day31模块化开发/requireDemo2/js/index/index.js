// 都要遵从AMD规范

//index.js模块 依赖drag.js模块进行开发
define(["drag", "scale"], function(drag, scale){
	function index(){
		var oBtn = document.getElementById("btn1");
		var oDiv1 = document.getElementById("div1");
		var oDiv2 = document.getElementById("div2");
		var oDiv3 = document.getElementById("div3");

		//1、添加点击
		oBtn.onclick = function(){
			oDiv1.style.display = "block";
		}

		//2、实现div3可以被拖拽
		drag.drag(oDiv3);

		//3、拖拽div2，让div1进行缩放
		scale.scale(oDiv1, oDiv2);
	}

	return {
		index: index
	}
})