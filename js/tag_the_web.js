var	w = window.innerWidth;
var	h = window.innerHeight;
var wild = false;
var CheminComplet = document.location.href;

var dcanvas = document.createElement("canvas");
dcanvas.id = 'drawing_canvas';
dcanvas.style.width = w + 'px';
dcanvas.style.height = h + 'px';
document.body.appendChild(dcanvas);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
	if (request.todo === "desactivateExt"){
		alert('in here');
		document.body.removechild(dcanvas);
		window.location.reload();
		exit();
	}
})


/*
function deactivate_sm(){
	wild = true;
}

if (!wild)
{

}*/
//document.addEventListener();;

//alert('url page ' + CheminComplet + ' w = ' + w + ' h = ' + h);
