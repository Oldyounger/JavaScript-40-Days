			function ajax({method = "get", url, data, success, error}){
				var xhr = null;
				try{
					xhr = new XMLHttpRequest();
				}catch(error){
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}

				if(method == "get" && data){
					url += "?" + data + "&" + new Date().getTime();
				}

				xhr.open(method, url, true);

				if(method == "get"){
					xhr.send();
				}else{
					xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
					xhr.send(data);
				}

				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							//处理下载完数据的方式都是一样的
							/*
								如何去处理下载完成的数据不确定
								具体要写什么代码不确定
								回调函数  把函数当做参数传入
							*/
							if(success){
								success(xhr.responseText)
							}

						}else{
							if(error){
								error("Error:" + xhr.status);
							}
						}
					}
				}
			}