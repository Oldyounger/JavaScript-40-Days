//小C开发的
define(function(){
	function range(iNum, iMin, iMax){
		if(iNum < iMin){
			return iMin;
		}else if(iNum > iMax){
			return iMax;
		}else{
			return iNum;
		}
	}
	return {
		range: range
	}
})