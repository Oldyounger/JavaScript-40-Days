<?php 
	//取出html提交的数据，插入到数据库中
	header('content-type:text/html;charset="utf-8"');
	
	/*
		数据是通过get提交 $_GET
	*/
	$id = $_GET['id'];

	//1、链接数据
	/*
		三个参数
			第一个参数  IP/域名
			第二个参数  用户名
			第三个参数	密码
	*/
	$link = mysql_connect("localhost", "root", "123456");

	//2、判断是否链接成功
	if(!$link){
		echo "数据库链接失败";
		exit; //终止程序
	}

	//3、设置字符集
	mysql_set_charset("utf8");

	//4、选择数据库
	mysql_select_db("qd1807");

	//5、准备sql语句
	$sql = "SELECT * FROM students WHERE id={$id}";

	//6、发送sql语句
	$res = mysql_query($sql);
	
	$row = mysql_fetch_assoc($res);
	$id = $row["id"];
	$name = $row["name"];
	$english = $row["english"];
	$math = $row['math'];
	$chinese = $row["chinese"];


	echo '<h1>添加数据</h1>';
	echo '<form action="updateStudents_done.php">';
	echo    '<input type="hidden" name = "id"  value = '.$id.' >';
	echo	'<input type="text" name = "name" placeholder="姓名" value = '.$name.' >';
	echo	'<input type="text" name = "english" placeholder="英语" value = '.$english.'>';
	echo	'<input type="text" name = "math" placeholder="数学" value = '.$math.'>';
	echo	'<input type="text" name = "chinese" placeholder="语文" value = '.$chinese.'>';
	echo	'<input type="submit" value = "保存数据" />';
	echo '</form>';


	//8、关闭数据库
	mysql_close($link);
 ?>