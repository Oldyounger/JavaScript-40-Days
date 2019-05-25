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
		查看是否用户名重名
	*/
	$sql = "SELECT * FROM users WHERE username='{$username}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);

	//如果取出来数据
	if($row){
		echo "用户重名";
		exit;
	}


	//准备sql语句
	$sql = "INSERT INTO users(username, password) VALUES('{$username}','{$password}')";

	//发送sql语句
	$res = mysql_query($sql);

	if($res){
		echo "注册成功";
	}else{
		echo "注册失败";
	}

	mysql_close($link);


 ?>