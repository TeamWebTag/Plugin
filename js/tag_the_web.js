var	w = window.innerWidth;
var	h = window.innerHeight;
var wild = false;
var CheminComplet = document.location.href;

chrome.runtime.onMessage.addListener(function (request, sender){
	if (request.todo == "activateExt"){
		var dcanvas = document.createElement("canvas");
		dcanvas.id = 'drawing_canvas';
		dcanvas.style.width = w + 'px';
		dcanvas.style.height = h + 'px';
		document.body.appendChild(dcanvas);
	} else if (request.todo == "desactivateExt"){
		var oldcanvas = document.getElementById('drawing_canvas');
		if (oldcanvas !== undefined)
		{
			document.body.removechild(oldcanvas);
			window.location.reload();
		}
	} 
});


/*
function deactivate_sm(){
	wild = true;
}

if (!wild)
{

}*/
//document.addEventListener();;

//alert('url page ' + CheminComplet + ' w = ' + w + ' h = ' + h);
