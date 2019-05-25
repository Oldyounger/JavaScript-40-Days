<?php 
	header('content-type:text/html;charset="utf-8"');
	/*
		php数组分为这么几类
		
		1、索引数组(下标为数字的数组)
		2、关联数组(类似于JS中map映射)
			多维数组
		3、全局数组
			$_GET  装的是通过get方式发送过来的数据
			$_POST 装的是通过post方式发送过来的数据
	*/

	//普通的索引数组
	// $cars = array("宝马", "奔驰", "尼桑");

	// echo $cars;
	// var_dump($cars);

	// echo $cars[1];

	//【注】关联数组/键值数组
	$age = array("小明" => 40, "小花" => 18, "小白" => 5);

	// var_dump($age);

	// echo $age["小明"];


	/*
		所谓的多维数组
	*/
	$dogs = array(
		array("name" => "Marry", "age" => 2, "type" => "哈士奇"),
		array("name" => "元宝", "age" => 5, "type" => "金毛"),
		array("name" => "球球", "age" => 3, "type" => "比熊")
		);
	// var_dump($dogs);

	// echo $dogs[1]["type"];


	/*
		声明数组的简便方式
	*/
		/*$cars = array("宝马", "奔驰", "尼桑");
		
		for($i = 0; $i < count($cars); $i++){
			echo $cars[$i]."<br/>";
		}*/

		

 ?>