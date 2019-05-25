			var module2 = (function(mod){
				mod.m3 = function(){
					alert("这是m3方法");
				}
				return mod;
			})(module1 || {});