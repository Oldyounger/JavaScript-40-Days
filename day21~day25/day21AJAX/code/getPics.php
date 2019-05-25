<?php

/*
API:
	getPics.php

		isset  判断数是否存在
		参数
		cpage : 获取数据的页数

		判断有没有cpage参数传过来，如果没有传过来默认参数是1
		分页
*/
$cpage = isset($_GET['cpage']) ? $_GET['cpage'] : 1;

//page= 是加载数据的页数,1页有50条数据  在php中字符串拼接用.
$url = 'http://www.wookmark.com/api/json/popular?page='.$cpage;



//file_get_contents(url)  去读取url中文件的数据,并且是以字符串的方式读入

$content = file_get_contents($url);
$content = iconv('gbk', 'utf-8', $content); //对读到的数据进行编码

echo $content;

?>


















