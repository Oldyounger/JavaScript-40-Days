<?php 
	//取出html提交的数据，插入到数据库中
	header('content-type:text/html;charset="utf-8"');
	
	/*
		数据是通过get提交 $_GET
	*/
	// var_dump($_GET);
	$id = $_GET['id'];
	$name = $_GET['name'];
	$english = $_GET['english'];
	$math = $_GET['math'];
	$chinese = $_GET['chinese'];

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
	$sql = "UPDATE students set name='{$name}',english={$english},math={$math},chinese={$chinese} WHERE id={$id}";

	//6、发送sql语句
	$res = mysql_query($sql);
	


	//7、处理结果
	// var_dump($res);
	if($res){
		echo "修改成功<a href = 'showStudents.php'>查看数据</a>";
	}else{
		echo "修改失败<a href = 'showStudents.php'>查看数据</a>";
	}

	//8、关闭数据库
	mysql_close($link);
 ?>