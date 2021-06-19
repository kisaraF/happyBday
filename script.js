let displayHere = document.getElementById('displayHere');
let targetDate = new Date("Sep 07, 2021 00:00:00").getTime();

let countdown = setInterval(function (){
	let now = new Date().getTime();
	let distance = targetDate-now;
	//console.log(distance);
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	let mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
	let sec = Math.floor(distance % (1000 * 60) / (1000));

	if(days < 10){
		days = "0" + days;
	}
	if(hours < 10){
		hours = "0" + hours;
	}
	if(mins < 10){
		mins = "0" + mins;
	}
	if(sec < 10){
		sec = "0" + sec;
	}

	displayHere.innerHTML = days + "d " + hours + "h " + mins + "m " + sec + "s";

	if(distance < 0){
	clearInterval(countdown);
	displayHere.innerHTML = "HAPPY B'DAY BABY";
	}
},1000)