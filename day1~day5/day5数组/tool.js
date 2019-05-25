function bubbleSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		//每一轮比较的次数
		for(var j = 0; j < arr.length - (i + 1); j++){
			if(arr[j] > arr[j + 1]){
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}