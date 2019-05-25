<?php 
	header('content-type:text/html;charset="utf-8"');

	//分支语句
	/*if(5 < 3){
		echo "yes";
	}else{
		echo "no";
	}*/


	//多分支语句
	$num = 1;
	switch($num){
		case 1:
			echo "one";
			break;
		case 2:
			echo "two";
			break;
		default:
			break;
	}

	for($i = 0; $i < 5; $i++){
		// echo $i."<br/>";

		//通过占位符的方式进行字符串拼接
		echo "{$i}<br/>";
	}
	
 ?>