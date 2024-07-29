//var images=["img/CDDVD.png","img/jyougi.png","img/pet_hontai.png","img/pet_ravel.png","img/pet_kyappu.png","img/sinnbunnsi.png","img/yakann.png"];
var images=["https://github.com/Nanami-Matsui/EscapeGame/blob/main/CDDVD.png?raw=true",
	    "https://github.com/Nanami-Matsui/EscapeGame/blob/main/jyougi.png?raw=true",
	    "https://github.com/Nanami-Matsui/EscapeGame/blob/main/pet_hontai.png?raw=true",
	    "https://github.com/Nanami-Matsui/EscapeGame/blob/main/pet_ravel.png?raw=true",
	    "https://github.com/Nanami-Matsui/EscapeGame/blob/main/pet_kyappu.png?raw=true",
	    "https://github.com/Nanami-Matsui/EscapeGame/blob/main/sinnbunnsi.png?raw=true",
	    "https://github.com/Nanami-Matsui/EscapeGame/blob/main/yakann.png?raw=true"];

var names=["CD・DVDのケース","定規","ペットボトル","ペットボトルのラベル","ペットボトルのキャップ","新聞紙","やかん",]
var aku = new Audio("sound/door-old-open1.mp3")
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
	if(gomi_name =="https://github.com/Nanami-Matsui/EscapeGame/blob/main/CDDVD.png?raw=true" || gomi_name =="https://github.com/Nanami-Matsui/EscapeGame/blob/main/jyougi.png?raw=true"){
		correct();
	}else{
		matigai=matigai-1;
		document.getElementById("moji2").textContent=matigai;
		batu.play();
	}
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_2.html";
	}
}
function sigen(){
	if(gomi_name =="https://github.com/Nanami-Matsui/EscapeGame/blob/main/yakann.png?raw=true" || gomi_name =="https://github.com/Nanami-Matsui/EscapeGame/blob/main/pet_hontai.png?raw=true"){
		correct();
	}else{
		matigai=matigai-1;
		document.getElementById("moji2").textContent=matigai;
		batu.play();
	}
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_2.html";
	}
}


function pura(){ 
	if(gomi_name =="https://github.com/Nanami-Matsui/EscapeGame/blob/main/pet_ravel.png?raw=true" || gomi_name =="https://github.com/Nanami-Matsui/EscapeGame/blob/main/pet_kyappu.png?raw=true"){
		correct();
	}else{
		matigai=matigai-1;
		document.getElementById("moji2").textContent=matigai;
		batu.play();
	}
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_2.html";
	}
}

function kosiirui(){
	if(gomi_name=="https://github.com/Nanami-Matsui/EscapeGame/blob/main/sinnbunnsi.png?raw=true"){
		correct();
	}else{
		matigai=matigai-1;
		document.getElementById("moji2").textContent=matigai;
		batu.play();
	}
	if(matigai == 0){
		alert("最初からだよ！");
		location.href="stage_2.html";
	}
}

function gomi(num){
	if(flag == 0){
		gomi_name = images[num];
		gomi_position = num;
		document.getElementById("gomi" + num).style.border = "3px solid blue";

		//文字を表示する

		//ゴミの座標を取ってくる
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
		images.splice(gomi_position, 0, "https://github.com/Nanami-Matsui/EscapeGame/blob/main/nashi.png?raw=true");
		nokori = nokori - 1;
		flag=0;
		gomi_name="";
		document.getElementById("gomi" + gomi_position).style.border = "3px solid rgba(0, 0, 0, 0)";
		document.getElementById(gomi_position).style.visibility = "hidden";
		suteru.play();

		setImg();

		// ゴミをすべて捨てたかどうか
		if(nokori == 0){
			document.getElementById("doa").src="https://github.com/Nanami-Matsui/EscapeGame/blob/main/doa2.png?raw=true";
			aku.play();
			alert("ドアをタップして！")
		}
}

function door(){
	if(nokori == 0){
		location.href="stage_3.html"
	}else{
		alert("開いてないよ！")
	}
}
