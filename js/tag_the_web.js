var w = 0;
var h = 0;
var CheminComplet = document.location.href;

function getWindowSize(){
	w = window.innerWidth;
	h = window.innerHeight;
}

getWindowSize();
alert('url page ' + CheminComplet + ' w = ' + w + ' h = ' + h);