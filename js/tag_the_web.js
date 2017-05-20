var	w = window.innerWidth;
var	h = window.innerHeight;
var wild = false;
var CheminComplet = document.location.href;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
	if (request.todo == "activateExt"){
		var dcanvas = document.createElement("canvas");
		dcanvas.id = 'drawing_canvas';
		dcanvas.style.width = w + 'px';
		dcanvas.style.height = h + 'px';
		dcanvas.style.position = 'absolute';
		dcanvas.style.top = '0px';
		dcanvas.style.left = '0px';
		dcanvas.style.zIndex = '2147483647';
		dcanvas.style.background = 'transparent';
		dcanvas.style.pointerEvents = 'none';
		document.body.appendChild(dcanvas);
	} else if (request.todo == "desactivateExt"){
		var oldcanvas = document.getElementById('drawing_canvas');
		if (oldcanvas !== undefined)
		{
			document.body.removeChild(oldcanvas);
			window.location.reload();
		}
	}
	if (request.todo == "actTools"){
		var canTool = document.getElementById('drawing_canvas');
		canTool.style.pointerEvents = 'auto';
		var tools = document.createElement("div");
		tools.style.opacity = '1';
		// var pen = tools.createElement("div");
	}
	else if (request.todo == "desTools"){
		var canTool = document.getElementById('drawing_canvas');
		canTool.style.pointerEvents = 'none';
	}
});


