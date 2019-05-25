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