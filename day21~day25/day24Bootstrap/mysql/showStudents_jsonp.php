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
	
	$arr = array();

	while($row = mysql_fetch_assoc($res)){
		// $row 关联数组
		array_push($arr, $row);
	}

	//拿到函数名
	$funcName = isset($_GET['callback']) ? $_GET['callback'] : "";
	
	if($funcName){
		//返回jsonp格式的数据
		$str = json_encode($arr);
		echo "{$funcName}({$str});";
	}else{
		//转成json格式的字符串
		echo json_encode($arr);
	}

	


	//8、关闭数据库
	mysql_close($link);

 ?>