var w = 0;
var h = 0;

function getWindowSize(){
	w = window.screen.availWidth;
	h = window.innerHeight;
}

getWindowSize();
alert('w = ' + w +' and h = ' + h);