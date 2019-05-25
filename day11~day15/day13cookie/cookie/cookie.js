			function removeCookie(name){
				document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);
			}
			//expires 传入数字 代表天数
			function setCookie(name, value, {expires = 7, path, domain, secure}){
				var cookieStr = encodeURIComponent(name) + "=" + encodeURIComponent(value);
				if(expires){
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
			function numOfDate(n){
				//传入一个n
				var d = new Date();
				var date = d.getDate();
				d.setDate(n + date);
				return d;
			}
			//变种人=X教授; 赛亚人=孙悟空; DC英雄=超人 
			function getCookie(name){
				var cookieStr = decodeURIComponent(document.cookie);
				//1、健在字符串中出现的位置
				var start = cookieStr.indexOf(name);
				if(start == -1){
					return null;
				}else{
					//2、找到结束位置
					var end = cookieStr.indexOf(";", start);
					if(end == -1){
						end = cookieStr.length;
					}
				}
				//3、提取字符串
				var subStr = cookieStr.substring(start, end);
				//4、字符串分割
				var arr = subStr.split("=");
				return arr[1];
			}