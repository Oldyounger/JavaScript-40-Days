<?php 
	header('content-type:text/html;charset="utf-8"');
	$page = $_GET['page'];

	echo "您现在加载的是第{$page}页";
	
 ?>