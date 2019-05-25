<?php 
	header("Content-type:text/html;charset=utf-8");
	/*
		php链接数据库，总结为天龙八部
	*/
	//1、链接数据库
	/*
		第一个参数 主机名
		第二个参数 用户名
		第三个参数 密码
	*/
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
	$sql = "SELECT * FROM qd_users";

	//6、发送sql语句

	$res = mysql_query($sql);
	// var_dump($res);

	echo "<a href = 'insert.html'>添加用户</a>";

	echo "<table width='600' border='1'>";
	//表头
	echo "<tr><th>编号</th><th>用户名</th><th>密码</th><th>操作</th><tr>";

	//7、处理结果集
	while($row = mysql_fetch_assoc($res)){
		echo "<tr>";
		echo "<td>{$row['id']}</td>";
		echo "<td>{$row['username']}</td>";
		echo "<td>{$row['password']}</td>";
		echo "<td><a href = 'delete.php?id={$row['id']}'>删除</a>&ensp;/&ensp;<a href = '#'>修改</a></td>";
		echo "</tr>";
	}
	echo "</table>";

	//8、关闭数据库
	mysql_close($link);
	
 ?>