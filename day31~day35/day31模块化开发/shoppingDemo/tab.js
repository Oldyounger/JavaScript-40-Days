define(["jquery"], function($){
	function tabSwitch(){
		$(function(){
			//通过ajax下载数据
			$.ajax({
				url: "../data/tab.json",
				success: function(arr){
					//button
					for(var i = 0; i < arr.length; i++){
						if(i == 0){
							$(`<button class = "active">${arr[i].title}</button>`).appendTo($("#div1"));
						}else{
							$(`<button>${arr[i].title}</button>`).appendTo($("#div1"));
						}
					}

					//div
					for(var i = 0; i < arr.length; i++){
						if(i == 0){
							$(`<div style = "display: block">${arr[i].desc}</div>`).appendTo($("#div1"));
						}else{
							$(`<div>${arr[i].desc}</div>`).appendTo($("#div1"));
						}
					}
				},
				error: function(error){
					console.log(error)
				}
			})

			//实现选项卡操作 通过事件委托
			$("#div1").on("mouseover", "button", function(){
				//取消所有button的class样式
					$("#div1").find("button").attr("class", "");
					$("#div1").find("div").css("display", "none")
					.eq($(this).index()).css("display", "block");

					//将当前被点击按钮变成选中的
					$(this).attr("class", "active");
			})
		})
	}
	return {
		tabSwitch: tabSwitch
	}
})