<?php 
	header("Content-type:text/html;charset=utf-8");

	//提取post提交数据
	// var_dump($_POST);
	$username = $_POST['username'];
	$password = $_POST['password'];
	/*
		md5加密 通过算法
		将你给的字符串，直接编译成一个十六进制的字符串 
		【注】1、md5加密是不可以逆  2、相同的字符串md5加密以后的十六进制字符串是一样的。
		fcea920f7412b5da7be0cf42b8c93759
	*/
	$password = md5(md5($password)."qianfeng");

	//对密码加密
	// echo md5(md5($password).'qianfeng');

	//插入到数据库中
	$link = mysql_connect("localhost", "root", "123456");

	//2、判断是否链接成功
	if(!$link){
		echo "链接数据库失败";
		exit;
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择用哪个数据
	mysql_select_db("qd1806");

	//5、准备sql语句
	$sql = "INSERT INTO qd_users(username, password) VALUES('{$username}','{$password}')";
	
	//6、发送sql语句
	$res = mysql_query($sql);

	if($res){
		echo "添加成功<a href = 'userlist.php'>返回首页</a>";
	}else{
		echo "添加失败";
		exit;
	}
	mysql_close($link);

 ?>