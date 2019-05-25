			var module1 = (function(mod){
				var _count = 5;

				function mm1(){
					alert("mm1 " + (_count + 5));
				}
				function mm2(){
					alert("mm2 " + (_count + 15));
				}

				mod.m1 = mm1;
				mod.m2 = mm2;
				return mod;
			})(module2 || {});