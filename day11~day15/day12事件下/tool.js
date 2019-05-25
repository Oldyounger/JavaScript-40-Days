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

			function limitDrag(node){
				var offsetX = 0;
				var offsetY = 0;
				node.onmousedown = function(ev){
					var e = ev || window.event;
					//1、记录相对位置
					offsetX = e.clientX - node.offsetLeft;
					offsetY = e.clientY - node.offsetTop;

					//2、添加鼠标移动
					document.onmousemove = function(ev){
						var e = ev || window.event;
						var l = e.clientX - offsetX;
						if(l <= 0){
							l = 0;
						}
						var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
						if(l >= windowWidth - node.offsetWidth){
							l = windowWidth - node.offsetWidth;
						}
						var t = e.clientY - offsetY;
						if(t <= 0){
							t = 0;
						}
						var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
						if(t >= windowHeight - node.offsetHeight){
							t = windowHeight - node.offsetHeight;
						}

						node.style.left = l + 'px';
						node.style.top = t + 'px';
					}
				}

				document.onmouseup = function(){
					document.onmousemove = null;
				}
			}

			function drag(node){
				var offsetX = 0;
				var offsetY = 0;
				node.onmousedown = function(ev){
					var e = ev || window.event;
					//1、记录相对位置
					offsetX = e.clientX - node.offsetLeft;
					offsetY = e.clientY - node.offsetTop;

					//2、添加鼠标移动
					document.onmousemove = function(ev){
						var e = ev || window.event;
						node.style.left = e.clientX - offsetX + 'px';
						node.style.top = e.clientY - offsetY + 'px';
					}
				}

				document.onmouseup = function(){
					document.onmousemove = null;
				}
			}

			/*
				跨浏览器的阻止冒泡
			*/
			function stopBubble(e){
				if(e.stopPropagation){
					e.stopPropagation();
				}else{
					e.cancelBubble = true;
				}
			}
			//跨浏览器的阻止默认行为
			function preDef(e){
				if(e.preventDefault){
					e.preventDefault();
				}else{
					window.event.returnValue = false;
				}
			}

			function randomColor(){
 				var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1)";
 				return str;
 			}

			function removeSpaceNode(nodes){
				var arr = [];//把不是空白的节点装起来
				for(var i = 0; i < nodes.length; i++){
					if(!(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))){
						arr.push(nodes[i]);
					}
				}
				return arr;
			}

			//从父节点上，将空白节点直接删除掉
			function removeSpaceNode2(parentNode){
				var nodes = parentNode.childNodes;
				for(var i = 0; i < nodes.length; i++){
					if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
						//将这个空白节点删除
						parentNode.removeChild(nodes[i]);
					}
				}
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
			
			function bubbleSort(arr){
				for(var i = 0; i < arr.length - 1; i++){
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
					for(var j = i + 1; j < arr.length; j++){
						if(arr[i] > arr[j]){
							var tmp = arr[i];
							arr[i] = arr[j];
							arr[j] = tmp;
						}
					}
				}
			}
			function showTime(){
				var d = new Date();
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				var date = d.getDate();

				var week = d.getDay();
				week = chineseFromNum(week);

				var hour = doubleNum(d.getHours());
				var min = doubleNum(d.getMinutes());
				var sec = doubleNum(d.getSeconds());

				return year + "年" + month + "月" + date + "日 星期" + week + " " + hour + ":" + min + ":" + sec; 
			}

			//将数字转成中文数字
			function chineseFromNum(num){
				switch(num){
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
					case 0:
						return "日";
						break;
					default:
						console.log("error");
						break;
				}
			}

			function doubleNum(n){
				if(n < 10){
					return "0" + n;
				}else{
					return n;
				}
			}