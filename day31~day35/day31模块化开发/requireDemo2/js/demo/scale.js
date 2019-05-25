//小B同学写的缩放模块
define(["range"], function(range){

	//按下node2  缩放node1
	function scale(node1, node2){
		node2.onmousedown = function(ev){
			var e = ev || window.event;

			var l = e.clientX;
			var t = e.clientY;
			var w = node1.offsetWidth;
			var h = node1.offsetHeight;

			document.onmousemove = function(ev){
				var e = ev || window.event;

				var W = e.clientX - l + w;
				var H = e.clientY - t + h;
				W = range.range(W, 100, 500);
				H = range.range(H, 100, 500);

				node1.style.width = W + 'px';
				node1.style.height = H + "px";
			}
		}
		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}

	return {
		scale: scale
	}
})