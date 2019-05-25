<?php 
	header('content-type:text/html;charset="utf-8"');
	//1、取出post提交过来的数据
	$username = $_POST['username'];
	$password = $_POST['password'];
	//密码加密
	$password = md5(md5($password)."qianfeng");

	//2、链接数据库，插入当前注册的用户

	$link = mysql_connect("localhost", "root", "123456");

	if(!$link){
		echo "链接数据库失败";
		exit;
	}

	mysql_set_charset("utf8");

	mysql_select_db("qd1807");

	/*
		查看是否用户名和密码是否和数据库中的一致
	*/
	$sql = "SELECT * FROM users WHERE username='{$username}' AND password='{$password}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){
		echo "登录成功";
	}else{
		echo "用户名或密码错误";
	}


	mysql_close($link);


 ?>