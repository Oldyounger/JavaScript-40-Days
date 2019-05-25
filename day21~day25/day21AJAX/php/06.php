<?php 
	header('content-type:text/html;charset="utf-8"');

	/*
		md5加密是直接将一个字符串通过加密方式转成十六进制的字符串。
		md5是一个不可逆加密，同一个字符串加密完成是一样的。
	*/
	// echo md5(md5("123456abc")."qianfeng"); //df10ef8509dc176d733d59549e7dbfaf 9fce04ee494f42dce2a09358e0041dee


	//date必须要传入参数，传入参数格式化时间的字符串
	// echo date("Y年m月d日 H:i:s");

	echo time();  //获取时间戳
 ?>