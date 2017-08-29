var music = document.getElementById('music');

function playAudio() {
	if (music.paused) {
		music.play();
		pbutton.className = "";
		pbutton.className = "pause";
		document.getElementById('radio').src='img/radioOn.gif';
		
	} else {
		music.pause();
		pbutton.className = "";
		pbutton.className = "play";
		document.getElementById('radio').src='img/radioOff.png';
	}
}

function playNext(){
	if (music.currentTime < 15){music.currentTime = 120;}

}

music.onended = function() {
   pbutton.className = "";
		pbutton.className = "play";
		document.getElementById('radio').src='img/radioOff.png';
};

