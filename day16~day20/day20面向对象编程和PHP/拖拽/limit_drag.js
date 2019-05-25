//要拥有拖拽所有的功能，新增限制出界
function Limit_Drag(id){
	//继承属性  构造函数的伪装
	Drag.call(this, id);
}

//继承所有的方法  原型链
for(var funcName in Drag.prototype){
	Limit_Drag.prototype[funcName] = Drag.prototype[funcName];
}

//重写funcMove方法  多态
Limit_Drag.prototype.funcMove = function(ev){
	var e = ev || window.event;
	var l = e.clientX - this.offsetX;
	var t = e.clientY - this.offsetY;
	//限制出界
	if(l <= 0){
		l = 0;
	}
	var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
	if(l >= windowWidth - this.node.offsetWidth){
		l = windowWidth - this.node.offsetWidth;
	}

	if(t <= 0){
		t = 0;
	}
	if(t >= windowHeight - this.node.offsetHeight){
		t = windowHeight - this.node.offsetHeight;
	}


	this.node.style.left = l + 'px';
	this.node.style.top = t + 'px';
}