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
		var tools = document.createElement("div");
		tools.id = 'using_tools';
		tools.style.width = '400px';
		tools.style.height = '100px';
		tools.style.opacity = '1';
		tools.style.position = 'absolute';
		tools.style.backgroundColor = 'beige';
		tools.style.top = '20px';
		tools.style.left = '30px';
		document.body.appendChild(tools);
		var crayon = document.createElement("button");
		crayon.style.src = 'lol.png';
		crayon.style.top = '22px';
		crayon.style.left = '32px';
		document.body.appendChild(crayon);
	} else if (request.todo == "desactivateExt"){
		var oldcanvas = document.getElementById('drawing_canvas');
		if (oldcanvas !== undefined)
		{
			document.body.removeChild(oldcanvas);
			window.location.reload();
		}
		tools.display = '';
	}
	if (request.todo == "actTools"){
		var canTool = document.getElementById('drawing_canvas');
		canTool.style.pointerEvents = 'auto';
		tools.display = "";
		// var pen = tools.createElement("div");
	}
	else if (request.todo == "desTools"){
		var canTool = document.getElementById('drawing_canvas');
		canTool.style.pointerEvents = 'none';
		tools.display = '';
	}
});
