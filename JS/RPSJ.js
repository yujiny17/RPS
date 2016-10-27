document.getElementById("option1").addEventListener("click",function(){computerThrow("rock");});
document.getElementById("option2").addEventListener("click",function(){computerThrow("paper");});
document.getElementById("option3").addEventListener("click",function(){computerThrow("scissors");});

var wins=0;
var ties=0;
var losses=0;

function computerThrow(input){
	document.getElementById("user").innerHTML="You threw "+input;
	var chance=Math.floor(Math.random() * 3);
	if(chance==0){
		document.getElementById("computer").innerHTML="I threw rock.";
	}
	else if(chance==1){
		document.getElementById("computer").innerHTML="I threw paper.";
	}
	else if(chance==2){
		document.getElementById("computer").innerHTML="I threw scissors.";
	}
	console.log("user: "+input+" computer: "+chance);
	next(chance, input);
}

function next(computer, playerInput){
	console.log("user: "+playerInput+" comupter:"+computer);

	var result="";

	if(playerInput=="rock"){
		if(computer===0){result="tie"; ties++;}
		else if(computer===1){result="loss"; losses++;}
		else{result="win"; wins++;}
	}
	else if(playerInput=="paper"){
		if(computer===0){result="win"; wins++;}
		else if(computer===1){result="tie"; ties++;}
		else{result="loss"; losses++;}
	}
	else if(playerInput="scissors"){
		if(computer===0){result="loss"; losses++;}
		else if(computer===1){result="win"; wins++;}
		else{result="tie"; ties++;}
	}
	console.log("user: "+playerInput+" comupter:"+computer);
	document.getElementById("WTL").innerHTML="Wins:"+wins+ ", Ties: " + ties + ", Losses: " + losses;
}




