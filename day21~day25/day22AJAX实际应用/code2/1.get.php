<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
//就是系统或应用程序出错时弹出的 错误报告，编程人员根据这个报告的内容可以判断是哪一段程序代码出问题了。

/*
	$_GET 一个全局关联数组  这个数组会结构通过get请求传输过来的数据 以关联数据的形式存在呢

	【注】$_GET存储，我们从前端传到后端所有通过get方式，传输过来的数据。
		数据格式关联数组的格式，array(name=>value,name=>value);

*/



$username = $_GET['username'];
$age = $_GET['age'];
$password = $_GET["password"];

/*获取?后面对应健的值*/


// echo "你的名字：".$username."，年龄：{$age}，密码：{$password}";
// echo 相当于document.write()

echo "你的名字：{$username}，年龄：{$age}，密码：{$password}xxxxxxyyyyyyyxxx";
?>

























