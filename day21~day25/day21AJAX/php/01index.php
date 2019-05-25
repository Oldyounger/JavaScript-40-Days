<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style>
			*{padding: 0}
			.menulist{
				list-style: none;
				width: 80px;
				border: 1px solid #ddd;
				border-bottom: none;
			}
			.menulist li{
				font-family: "微软雅黑";
				border-bottom: dashed 1px gray;
				padding: 5px;
			}
		</style>
		<script>
			
		</script>
	</head>
	<body>
		<?php 
			$arr = array('数码产品', '生活家居', '游戏分类', '厨房用具', "新增选项", "新增选项");
		 ?>
		<ul class = "menulist">
			<!-- 数据从数据库取出，然后在加载到页面上 -->
			<?php for($i = 0; $i < count($arr); $i++){ ?>
				<li><?php echo $arr[$i]; ?></li>
			<?php } ?>
		</ul>
	</body>
</html>














