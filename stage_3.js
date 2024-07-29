var images=["img/doraiya.png","img/pot.png","img/rajikase.png","img/plaiya.png","img/bideo.png","img/syuredar.png","img/photo.png"];
var names=["ドライヤー","電気ポット","ラジカセ","ポータブル音楽プレイヤー","ビデオテープ","シュレッダーにかけた紙","写真"];
var aku = new Audio("sound/door-old-open1.mp3");
var suteru = new Audio("sound/water-drop1.mp3");
var nokori = 7;
var matigai = 3;
var batu = new Audio("sound/incorrect.mp3")


var flag = 0; // ゴミをクリックしたかどうか
var gomi_name; // クリックしたゴミの名前
var gomi_position // クリックしたゴミの場所

function setImg(){
	for(var i = 0; i < images.length; i++){
		// var rand = Math.floor(Math.random()*6);
		document.getElementById("gomi" + i).src = images[i];
	}
}

function timer(){

	document.getElementById("jikan").textContent = time;
	if(time > 0){
		setTimeout("timer()",1000);
	}
}
function hutuu(){
	if(gomi_name =="img/pot.png" || gomi_name =="img/rajikase.png" || gomi_name =="img/bideo.png" || gomi_name =="img/photo.png"){
		correct();
	}else{
		matigai=matigai-1;
		document.getElementById("moji2").textContent=matigai;
		batu.play();
	}
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_3.html";
	}
}
function sigen(){
	matigai=matigai-1;
	document.getElementById("moji2").textContent=matigai;
		batu.play();
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_3.html";
	}
}


function pura(){ 
	matigai=matigai-1;
	document.getElementById("moji2").textContent=matigai;
		batu.play();
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_3.html";
	}
}

function kosiirui(){
	if(gomi_name =="img/syuredar.png"){
		correct();
	}else{
		matigai=matigai-1;
		document.getElementById("moji2").textContent=matigai;
		batu.play();
	}
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_3.html";
	}
}

function BOX(){
	if(gomi_name =="img/doraiya.png" || gomi_name =="img/plaiya.png"){
		correct();
	}else{
		matigai=matigai-1;
		document.getElementById("moji2").textContent=matigai;
		batu.play();
	}
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_3.html";
	}
}

function gomi(num){
	if(flag == 0){
		gomi_name = images[num];
		gomi_position = num;	
		document.getElementById("gomi" + num).style.border = "3px solid blue";

		//文字を表示する

		// ゴミの座標を取ってくる
		var gomi_x = document.getElementById("gomi" + num).offsetLeft;
		var gomi_y = document.getElementById("gomi" + num).offsetTop;


		// ゴミの名前
		var name = document.createElement("span");
		name.textContent = names[num];
		name.style.position = "absolute";
		name.style.left = gomi_x + "px";
		name.style.top = gomi_y - 20 + "px";
		name.setAttribute("id", num);

		document.body.appendChild(name);
		flag = 1;
	}
}

function correct(){
		images.splice(gomi_position,1);
		images.splice(gomi_position, 0, "img/nashi.png");
		nokori = nokori - 1;
		flag=0;
		gomi_name="";
		document.getElementById("gomi" + gomi_position).style.border = "3px solid rgba(0, 0, 0, 0)";
		document.getElementById(gomi_position).style.visibility = "hidden";
		suteru.play();
		
		setImg();

		// ゴミをすべて捨てたかどうか
		if(nokori == 0){
			document.getElementById("doa").src="img/doa2.png";
			aku.play();
			alert("ドアをタップして！")
		}
}

function door(){
if (nokori==0){
	location.href="saigo.html"
}else{
	alert("開いてないよ！")
}
}
