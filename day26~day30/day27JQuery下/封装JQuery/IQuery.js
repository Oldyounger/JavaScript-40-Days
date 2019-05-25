function IQuery(vArg){
	//这个属性是专门用来存储获取到的所有元素节点
	this.elements = [];

	//1、判断传入的参数到底是什么数据类型
	switch(typeof vArg){
		case "function":
			//相当于 window.onload 
			addEvent(window, "load", vArg)
			break;
		case "string":
			//2、判断传入参数的首字母
			switch(vArg[0]){
				case "#": //#id
					var node = document.getElementById(vArg.substring(1));
					this.elements.push(node);
					break;
				case ".": //.class
					var nodes = elementsByClassName(document, vArg.substring(1));
					this.elements = nodes;
					break;
				case "[": //[name=hello]
					var nodes = document.getElementsByName(vArg.substring(6, vArg.length - 1));
					this.elements = nodes;
					break;
				default:
					var nodes = document.getElementsByTagName(vArg);
					this.elements = nodes;
					break;
			}
			break;
		case "object":
			//this document window
			this.elements.push(vArg);
			break;
		default:
			break;
	}
}

IQuery.prototype.css = function(){
	if(arguments.length == 2){
		//设置参数
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i].style[arguments[0]] = arguments[1];
		}

	}else{
		if(typeof arguments[0] == "string"){
			//取值
			return getStyle(this.elements[0], arguments[0]);
		}else{
			//赋值多个值
			var obj = arguments[0];

			for(var attr in obj){
				for(var i = 0; i < this.elements.length; i++){
					this.elements[i].style[attr] = obj[attr];
				}
			}
		}
	}
}

IQuery.prototype.on = function(){
	switch(arguments.length){
		case 1:
			var obj = arguments[0];
			for(var i = 0; i < this.elements.length; i++){
				for(var eventType in obj){
					addEvent(this.elements[i], eventType, obj[eventType]);
				}
			}
			break;
		case 2:
			var eventTypes = arguments[0].split(" ");
			for(var i = 0; i < this.elements.length; i++){
				for(var j = 0; j < eventTypes.length; j++){
					addEvent(this.elements[i], eventTypes[j], arguments[1]);
				}
			}

			break;
		case 3:
			//事件委托
			var nodeName = arguments[1];
			var funName = arguments[2];


			for(var i = 0; i < this.elements.length; i++){
				addEvent(this.elements[i], arguments[0], function(ev){
					var e = ev || window.event;
					var target = e.target || window.event.srcElement;

					if(target.nodeName.toLowerCase() == nodeName){
						//强制改变改函数的this是当前的触发对象
						funName.call(target);
					}
				})
			}

			break;
		default:
			console.log("传参错误");
			break;
	}
}

IQuery.prototype.attr = function(){
	//setAttribute  getAttribute  removeAttribute
}

/*
	添加函数，统一都添加在IQuery.prototype
*/
IQuery.prototype.click = function(funcName){
	for(var i = 0; i < this.elements.length; i++){
		addEvent(this.elements[i], "click", funcName);
	}
}
IQuery.prototype.mouseover = function(funcName){
	for(var i = 0; i < this.elements.length; i++){
		addEvent(this.elements[i], "mouseover", funcName);
	}
}
IQuery.prototype.mouseout = function(funcName){
	for(var i = 0; i < this.elements.length; i++){
		addEvent(this.elements[i], "mouseout", funcName);
	}
}


function $(vArg){
	return new IQuery(vArg);
}
//浏览器兼容
function getStyle(node, styleAttr){
	if(node.currentStyle){
		return node.currentStyle[styleAttr];
	}else{
		return getComputedStyle(node)[styleAttr];
	}
}
//兼容IE8以下  通过class获取元素节点。	
function elementsByClassName(parentNode, className){
	var arr = [];
	var nodes = parentNode.getElementsByTagName("*");
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].className == className){
			arr.push(nodes[i]);
		}
	}
	return arr;
}

//添加事件
function addEvent(node, eventType, func){
	if(node.addEventListener){
		node.addEventListener(eventType, func, false);
	}else{
		node.attachEvent("on" + eventType, func);
	}
}

//删除事件
function removeEvent(node, eventType, func){
	if(node.removeEventListener){
		node.removeEventListener(eventType, func);
	}else{
		node.detachEvent("on" + eventType, func)
	}
}