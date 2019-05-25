<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

// $arr1 = array('leo','momo','zhangsen');

$arr2 = array('username'=>'leo','age'=>32);

//将php的数据结构转成的字符串
echo json_encode($arr2);