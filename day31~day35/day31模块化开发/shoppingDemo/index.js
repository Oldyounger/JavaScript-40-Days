define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	function index(){
		$(function(){
			sc_car();

			$.ajax({
				type: "GET",
				url: "../data/data.json",
				success: function(arr){
					// alert(arr);
					// 创建节点插入到页面上
					for(var i = 0; i < arr.length; i++){
						$(`<li class = 'goods_item'>
						<div class = 'goods_pic'>
							<img src="${arr[i].img}" alt="">
						</div>
						<div class = 'goods_title'>
							<p>【京东超市】奥利奥软点小草莓</p>
						</div>
						<div class = "sc">
							<div class = 'sc_btn' id = "${arr[i].id}">加入购物车</div>
						</div>
					</li>`).appendTo($(".goods_box ul"));
						//【注】一定要注意批量操作

					}
				},
				error: function(msg){
					alert(msg);
				}
			})

			//给购物车添加点击事件
			$(".goods_box ul").on("click", ".sc_btn", function(){
				ballMove(this);

				var id = this.id;
				//将该商品添加到cookie中，
				/*
					cookie里值存储商品的id和商品的数量
					存储一条cookie  name是goods value json格式的字符串
					[{id:1,num:5},{id:4,num:1}]
				*/
				//1、是否是第一次添加该商品
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					//第一次添加
					var arr = [{id: id,num:1}];
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7
					})
				}else{
					//2、判断之前是否添加过
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					var isSame = false;
					for(var i = 0; i < arr.length; i++){
						if(id == arr[i].id){
							isSame = true;
							//<1>添加过
							arr[i].num++;
							break;
						}
					}
					//<2>没有添加过
					if(!isSame){
						var obj = {id: id, num: 1};
						arr.push(obj);
					}

					//重新存储在数据库中
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7
					})
				}
				sc_car();
			})

			//购物车数量
			function sc_car(){
				var cookieStr = $.cookie("goods");
				if(cookieStr){
					var arr = eval(cookieStr);
					var sum = 0; //求和数
					for(var i = 0; i < arr.length; i++){
						sum += arr[i].num;
					}
					$(".sc_right .sc_num").html(sum);
				}else{
					$(".sc_right .sc_num").html(0);
				}

			}

			/*
				mouseenter => mouseover
				mouseleave => mouseout
			*/
			$(".sc_right").mouseenter(function(){
				$(this).stop().animate({
					right: 0
				})
				sc_msg();
			});
			$(".sc_right").mouseleave(function(){
				$(this).stop().animate({
					right: -270
				})
			});

			//要将存储在cookie中的商品添加到页面上
			function sc_msg(){
				$.ajax({
					url: "../data/data.json",
					type: "GET",
					success: function(arr){
						//将原有的数据清空
						$(".sc_right ul").html("");

						//只能加载存储在cookie中的商品
						var cookieStr = $.cookie("goods");
						if(cookieStr){
							var cookieArr = eval(cookieStr);
							var goodsArr = [];
							for(var i = 0; i < arr.length; i++){
								for(var j = 0; j < cookieArr.length; j++){
									if(arr[i].id == cookieArr[j].id){
										arr[i].num = cookieArr[j].num;
										goodsArr.push(arr[i]);
									}
								}
							}
							
							//创建节点，添加到页面上
							for(var i = 0; i < goodsArr.length; i++){
								$(`<li>
									<div class = 'sc_goodsPic'>
										<img src = "${goodsArr[i].img}">
									</div>
									<div class = 'sc_goodsTitle'>
										<p>这是商品曲奇饼干</p>
									</div>
									<div class = 'sc_goodsBtn'>购买</div>
									<div class = 'sc_goodsNum'>商品数量：${goodsArr[i].num}</div>
								</li>`).appendTo($(".sc_right ul"));
							}
						}
						
					},
					error: function(msg){
						alert(msg);
					}
				})
			}


			//小球进行抛物线运动
			function ballMove(node){
				//node是我们点击的按钮
				//<1>先将小球移动到购物车按钮的位置
				$("#ball").css({
					display: "block",
					left: $(node).offset().left,
					top: $(node).offset().top
				});

				var offsetX = $(".sc_pic").offset().left - $("#ball").offset().left;
				var offsetY = $(".sc_pic").offset().top - $("#ball").offset().top;

				//创建抛物线对象，配置参数
				var bool = new Parabola({
					el: "#ball",
					targetEl: null,
					offset: [offsetX, offsetY],
					curvature: 0.0005,
					duration: 400,
					callback: function(){
						$("#ball").hide();
					}
				})

				bool.start();
			}

			//清除购物车
			$("#clearBtn").click(function(){
				$.cookie("goods", null);
				sc_car();
			})
		})
	}

	//清除购物车
	function deleteCar(){
		$.cookie("goods", null);
		$(".sc_right .sc_num").html(0);
	}
	return {
		index: index,
		deleteCar: deleteCar
	}
})