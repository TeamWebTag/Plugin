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
		tools.style.width = '80px';
		tools.style.height = '300px';
		tools.style.opacity = '1';
		tools.style.position = 'absolute';
		tools.style.backgroundColor = 'beige';
		tools.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 6px 10px';
		tools.style.top = '0px';
		tools.style.left = '0px';
		document.body.appendChild(tools);
		var crayon = document.createElement("img"); 
		crayon.id = 'pencil';
		crayon.src = chrome.runtime.getURL('img/lol.png');
		crayon.style.width = '50px';
		crayon.style.height = '50px';
		crayon.style.top =  '15px';
		crayon.style.left = '15px';
		crayon.style.cursor = 'pointer';
		crayon.style.position = 'absolute';
		document.getElementById('using_tools').appendChild(crayon);
		var eraser = document.createElement("img"); 
		eraser.id = 'eraser';
		eraser.src = chrome.runtime.getURL('img/eraser.png');
		eraser.style.width = '50px';
		eraser.style.height = '50px';
		eraser.style.top =  '80px';
		eraser.style.left = '15px';
		eraser.style.cursor = 'pointer';
		eraser.style.position = 'absolute';
		document.getElementById('using_tools').appendChild(eraser);
		var libcolor = document.createElement("script");
		libcolor.src = chrome.runtime.getURL('jscolor/jscolor.js');
		document.body.appendChild(libcolor);
		var butcolor = document.createElement("button");
		butcolor.className = "jscolor {valueElement:null,value:'ffffff'}";
    	butcolor.style.border = "2px solid black";
    	butcolor.style.width = '50px';
		butcolor.style.height = '50px';
		butcolor.style.top =  '145px';
		butcolor.style.left = '15px';
		butcolor.style.cursor = 'pointer';
		butcolor.style.position = 'absolute';
		document.getElementById('using_tools').appendChild(butcolor);
	} else if (request.todo == "desactivateExt"){
		var oldcanvas = document.getElementById('drawing_canvas');
		if (oldcanvas !== null)
		{
			document.body.removeChild(oldcanvas);
			window.location.reload();
		}
		// tools.display = '';
	}
	if (request.todo == "actTools"){
		var canTool = document.getElementById('drawing_canvas');
		canTool.style.pointerEvents = 'auto';
		// tools.display = "";
		// var pen = tools.createElement("div");
	}
	else if (request.todo == "desTools"){
		var canTool = document.getElementById('drawing_canvas');
		canTool.style.pointerEvents = 'none';
		// tools.display = '';
	}
});
