var $reduce=document.getElementsByClassName("reduce");
var $count=document.getElementsByClassName("count");
var $augment=document.getElementsByClassName("augment");
$reduce[0].onclick=function(){
	$count[0].value=$count[0].value*1-1;
	if($count[0].value<=1){
		$count[0].value=1;
	}
}
$augment[0].onclick=function(){
	$count[0].value=$count[0].value*1+1;
}
$count[0].oninput=function(){
	if($count[0].value<=1){
		$count[0].value=1;
	}
}