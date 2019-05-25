<?php 
	header('content-type:text/html;charset="utf-8"');
	/*
		通过php代码链接数据库
		天龙八部
	*/
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

	$sql = "SELECT * FROM students;";

	//6、发送sql语句
	$res = mysql_query($sql);


	//7、处理结果
	// var_dump($res);
	//调用下面这个函数，可以取出数据库中的一行数据

	echo "<h1>展示数据</h1>";
	echo "<a href = 'insertStudents.html'>添加学生成绩</a>";
	echo "<table border=1>";
	echo "<tr><th>学号</th><th>姓名</th><th>英语</th><th>数学</th><th>语文</th><th>操作</th></tr>";
	
	while($row = mysql_fetch_assoc($res)){
		// var_dump($row);
		echo "<tr><td>{$row["id"]}</td><td>{$row["name"]}</td><td>{$row["english"]}</td><td>{$row["math"]}</td><td>{$row["chinese"]}</td><td><a href = 'deleteStudents.php?id={$row["id"]}'>删除</a> / <a href = 'updateStudents.php?id={$row["id"]}'>修改</a></td></tr>";
	}
	echo "</table>";


	//8、关闭数据库
	mysql_close($link);

 ?>