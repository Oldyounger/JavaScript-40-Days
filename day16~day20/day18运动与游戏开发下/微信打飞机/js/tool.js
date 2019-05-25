			function numOfDate(num){
				var d = new Date();
				var day = d.getDate();
				d.setDate(day + num);
				return d;
			}
						//设置cookie
			function setCookie(name, value, expires, path, domain, secure){
				//将name和value转成字符
				var cookieStr = encodeURIComponent(name) + "=" + encodeURIComponent(value);
				if(expires){
					//传入数字，将数字转成对应日期
					cookieStr += ";expires=" + numOfDate(expires); 
				}
				if(path){
					cookieStr += ";path=" + path;
				}
				if(domain){
					cookieStr += ";domain=" + domain;
				}
				if(secure){
					cookieStr += ";secure";
				}

				document.cookie = cookieStr;
			}

			function removeCookie(name){
				document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);
			}
			function getCookie(name){
				var cookieStr = decodeURIComponent(document.cookie);
				//1、先找name开始的下标
				var start = cookieStr.indexOf(name);
				if(start == -1){
					return null;
				}else{
					//2、键肯定存在，找出结束的位置
					var end = cookieStr.indexOf(";", start);
					if(end == -1){
						end = cookieStr.length;
					}
				}

				//3、通过start和end，将键值对提取出来
				var subStr = cookieStr.substring(start, end);
				//4、用等号进行字符串分割
				var arr = subStr.split("=");
				return arr[1];
			}

//阻止默认行为做一个浏览器兼容写法
function preDef(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		window.event.returnValue = false;
	}
}
function drag(node){
	var offsetX = 0;
	var offsetY = 0;
	node.onmousedown = function(event){
		var e = event || window.event;
		offsetX = e.clientX - node.offsetLeft;
		offsetY = e.clientY - node.offsetTop;


		//改变当前被拖拽物体的位置
		document.onmousemove = function(event){
			var e = event || window.event;
			node.style.left = e.clientX - offsetX + 'px';
			node.style.top = e.clientY - offsetY + 'px';
		}
	}
				//取消拖拽
	document.onmouseup = function(){
		document.onmousemove = null;
	}
}

function stopBubble(e){
	if(e.cancelBubble){
		e.cancelBubble = true;
	}else{
		e.stopPropagation();
	}
}


function randomColor(){
	var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1)";
	// "rgba(255,255,255,1)"  [0,1)
	
	return str;
}

//忽略空白节点
function removeSpaceNode(nodes){
	var res = []; //用于存储不空的节点
	for(var i = 0; i < nodes.length; i++){
		if(!(nodes[i].nodeType == 3 && /^\s+$/ig.test(nodes[i].nodeValue))){
			res.push(nodes[i]);
		}
	}
	return res;
}





// 浏览器兼容写法
function getStyle(node, styleType){
	return node.currentStyle ? node.currentStyle[styleType] : getComputedStyle(node)[styleType];
}

//兼容IE8以下，获取className节点的元素。
function elementsByClassName(node, className){
	var res = [];
	//1、查找node所有的子节点
	var nodes = node.getElementsByTagName("*");
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].className == className){
			res.push(nodes[i]);
		}
	}
	return res;
	
}


function BubbleSort(arr){
	//决定比较几轮
	for(var i = 0; i < arr.length - 1; i++){
		//决定每一轮比较多少次
		for(var j = 0; j < arr.length - i - 1; j++){
			if(arr[j] > arr[j + 1]){
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}

function changeSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		//次数
		for(var j = i + 1; j < arr.length; j++){
			if(arr[i] > arr[j]){
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

function norepeat(arr){
	for(var i = arr.length - 1; i > 0; i--){
		for(var j = i - 1; j >= 0; j--){
			if(arr[i] == arr[j]){
				arr.splice(j, 1);
			}
		}
	}
}




//自定展示当前时间
			function showTime(){
				var d = new Date();
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				var date = d.getDate();

				var week = d.getDay();
				//将数字转成中文
				week = chineseFromNum(week);
				
				var hour = d.getHours();
				var min = d.getMinutes();
				var sec = d.getSeconds();

				return year + "年" + month + "月" + date + "日 星期" + week + " " + doubleNum(hour) + ":" + doubleNum(min) + ":" + doubleNum(sec); 
			}

			//单位数变双位数
			function doubleNum(num){
				if(num < 10){
					return "0" + num;
				}else{
					return num;
				}
			}

			//将数字转成中文的函数
			function chineseFromNum(num){
				switch(num){
					case 0:
						return "日";
						break;
					case 1:
						return "一";
						break;
					case 2:
						return "二";
						break;
					case 3:
						return "三";
						break;
					case 4:
						return "四";
						break;
					case 5:
						return "五";
						break;
					case 6:
						return "六";
						break;
				}
			}