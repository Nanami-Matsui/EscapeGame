var count_1 = 0;
var count_2 = 0;
var moji_1=["あ","な","た","は","と","じ","こ","め","ら","れ","た","、","","",];
var moji_2=["だ","っ","し","ゅ","つ","す","る","に","は","ゴ","ミ","を","た","だ","し","く","す","て","ろ"];

　var type = new Audio("sound/typewriter.mp3");

var timer_1 = setInterval("tiperiter_1()",300);
var timer_2;

function tiperiter_1(){
	var hyouji_moji = document.getElementById("ji_1").textContent;
	document.getElementById("ji_1").textContent = hyouji_moji + moji_1[count_1];
	type.play();
	count_1 = count_1 + 1;
	if(count_1 == moji_1.length){
		clearInterval(timer_1);
		timer_2 = setInterval("tiperiter_2()", 300);
	}
}

function tiperiter_2(){
	var hyouji_moji = document.getElementById("ji_2").textContent;
	document.getElementById("ji_2").textContent = hyouji_moji + moji_2[count_2];
	type.play();
	count_2 = count_2 + 1;
	if(count_2 == moji_2.length){
		clearInterval(timer_2);
	}
}

function stert(){
	location.href="stage_1.html";
}
