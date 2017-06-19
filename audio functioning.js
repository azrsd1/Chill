var music = document.getElementById('music');

function playAudio() {
	if (music.paused) {
		music.play();
		pbutton.className = "";
		pbutton.className = "pause";
		
	} else {
		music.pause();
		pbutton.className = "";
		pbutton.className = "play";
	}
}