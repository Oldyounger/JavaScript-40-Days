//小A同学实现的拖拽模块
define(["range"], function(range){
	function drag(node){
		var offsetX = 0;
		var offsetY = 0;

		node.onmousedown = function(ev){
			var e = ev || window.event;

			offsetX = e.clientX - node.offsetLeft;
			offsetY = e.clientY - node.offsetTop;

			document.onmousemove = function(ev){
				var e = ev || window.event;
				var l = e.clientX - offsetX;
				l = range.range(l, 0, document.documentElement.clientWidth - node.offsetWidth);

				var t = e.clientY - offsetY;
				t = range.range(t, 0, document.documentElement.clientHeight - node.offsetHeight);

				node.style.left = l + 'px';
				node.style.top = t + "px";
			}
		}

		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}

	return {
		drag: drag
	}
})