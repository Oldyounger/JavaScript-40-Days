//匀速运动的函数
			function startMove(node, speed, attr, iTarget, complete){
				clearInterval(node.timer);
				node.timer = setInterval(function(){
					var iCur = parseInt(getStyle(node, attr));
					speed = iTarget > iCur ? Math.abs(speed) : -Math.abs(speed);

					//匀速运动的停止条件
					if(Math.abs(iTarget - iCur) < Math.abs(speed)){
						clearInterval(node.timer);
						node.style[attr] = iTarget + 'px';
						if(complete){
							complete.call(node);
						}
					}else{
						node.style[attr] = iCur + speed + 'px';
					}

				}, 30);
			}

			// 浏览器兼容写法
			function getStyle(node, styleType){
				return node.currentStyle ? node.currentStyle[styleType] : getComputedStyle(node)[styleType];
			}