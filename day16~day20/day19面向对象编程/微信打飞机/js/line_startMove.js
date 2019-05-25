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
						//进行碰撞检测
						//1、检测我方飞机和敌人是否发生碰撞
						if(node.parentNode.id == "enemy" && knock($("airplane"), node)){
							alert("GAME OVER");
							location.reload();
						}

						//2、检测子弹和敌人是否发生碰撞
						var aBullets = $("clip").getElementsByTagName("div");
						for(var i = 0; i < aBullets.length; i++){
							if(node.parentNode.id == "enemy" && knock(aBullets[i], node)){
								//子弹肯定要消失
								aBullets[i].style.top = -20 + "px";
								if(node.HP == 1){
									//爆炸
									node.firstElementChild.src = node.boom;
									setTimeout(function(){
										if(node){
											$("enemy").removeChild(node);
										}
									}, 200);
								}else{
									node.HP--;
									//被打
									node.firstElementChild.src = node.beat; 
								}
							}
						}

					}

				}, 30);
			}

			// 浏览器兼容写法
			function getStyle(node, styleType){
				return node.currentStyle ? node.currentStyle[styleType] : getComputedStyle(node)[styleType];
			}