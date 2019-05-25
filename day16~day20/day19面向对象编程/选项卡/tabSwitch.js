			function TabSwitch(id){
				var oDiv1 = document.getElementById(id);


				this.aBtns = oDiv1.getElementsByTagName("button");
				this.aDivs = oDiv1.getElementsByTagName("div");


				for(var i = 0; i < this.aBtns.length; i++){
					//添加自定义属性
					this.aBtns[i].index = i;

					var _this = this;

					this.aBtns[i].onclick = function(){
						_this.tab(this);
					};
				}

				
			}
			TabSwitch.prototype.tab = function(_this){
				
				//现将所有的按钮样式取消掉
				for(var j = 0; j < this.aBtns.length; j++){
							this.aBtns[j].className = "";
					this.aDivs[j].style.display = 'none';
				}
				_this.className = 'active';
				//将按钮对应的div显示出来
				this.aDivs[_this.index].style.display = 'block';
			}