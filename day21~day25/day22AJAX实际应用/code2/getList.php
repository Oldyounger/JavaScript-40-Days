<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$arr1 = array('leo','momo','zhangsen');

// $arr2 = array('username'=>'leo','age'=>32);
/*
	json_encode   数据结构 => json格式的字符串
	json_decode(json)  json格式的字符串 => 数据结构
*/

//将php的数据结构转成的字符串
echo json_encode($arr1);