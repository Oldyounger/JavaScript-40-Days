			function Drag(id){
				this.node = document.getElementById(id);
				
				var _this = this;

				this.node.onmousedown = function(ev){
					_this.funcDown(ev);
				};

				document.onmouseup = this.funcUp;
			}
			Drag.prototype.funcUp = function(){
				document.onmousemove = null;
			}
			Drag.prototype.funcDown = function(ev){
				var e = ev || window.event;
				//1、记录相对位置
				this.offsetX = e.clientX - this.node.offsetLeft;
				this.offsetY = e.clientY - this.node.offsetTop;


				var _this = this;
				//2、添加鼠标移动
				document.onmousemove = function(ev){
					_this.funcMove(ev);
				};
			}
			Drag.prototype.funcMove = function(ev){
				var e = ev || window.event;
				this.node.style.left = e.clientX - this.offsetX + 'px';
				this.node.style.top = e.clientY - this.offsetY + 'px';
			}