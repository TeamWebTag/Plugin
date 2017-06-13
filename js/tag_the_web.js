var	w = document.body.clientWidth; //window.innerWidth;
var	h = document.body.clientHeight; //window.innerHeight;
var wild = false;
var CheminComplet = document.location.href;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
		if (request.todo == "activateExt"){
		var libcolor = document.createElement("script");
		libcolor.src = chrome.runtime.getURL('jscolor/jscolor.js');
		document.body.appendChild(libcolor);
		var libp5 = document.createElement("script");
		libp5.src = chrome.runtime.getURL('p5/p5.min.js');
		document.body.appendChild(libp5);
		var libsketch = document.createElement("script");
		libsketch.src = chrome.runtime.getURL("p5/empty-example/sketch.js");
		document.body.appendChild(libsketch);	
		// var dcanvas = document.createElement("canvas");
		// // // // 
		var dcanvas = document.createElement("div");
		// // // // 
		dcanvas.id = 'drawing_canvas';
		dcanvas.style.position = 'fixed';
		dcanvas.style.top = '0px';
		dcanvas.style.left = '0px';
		dcanvas.style.zIndex = '1000';
		//dcanvas.children.style.backgroundBlendMode = 'multiply';
		 // dcanvas.style.zIndex = '2147483644';
		// dcanvas.style.background = 'transparent';
		// dcanvas.style.pointerEvents = 'none';
		document.body.appendChild(dcanvas);
		var tools = document.createElement("div");
		tools.id = 'using_tools';
		tools.style.zIndex = '1001';
		tools.style.width = '80px';
		tools.style.height = '210px';
		tools.style.opacity = '1';
		tools.style.position = 'absolute';
		tools.style.backgroundColor = 'beige';
		tools.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 6px 10px';
		tools.style.top = '30px';
		tools.style.left = '10px';
		tools.style.opacity = '0';
		document.body.appendChild(tools);
		var crayon = document.createElement("img");
		crayon.id = 'pencil';
		crayon.src = chrome.runtime.getURL('img/lol.png');
		crayon.style.width = '50px';
		crayon.style.height = '50px';
		crayon.style.top =  '15px';
		crayon.style.left = '15px';
		crayon.style.borderRadius = '8px 8px 8px 8px';
		crayon.style.cursor = 'pointer';
		crayon.style.position = 'absolute';
		document.getElementById('using_tools').appendChild(crayon);
		var eraser = document.createElement("img");
		eraser.id = 'eraser';
		eraser.src = chrome.runtime.getURL('img/trash.png');
		eraser.style.width = '50px';
		eraser.style.height = '50px';
		eraser.style.top =  '80px';
		eraser.style.left = '15px';
		eraser.style.borderRadius = '8px 8px 8px 8px';
		eraser.style.cursor = 'pointer';
		eraser.style.position = 'absolute';
		document.getElementById('using_tools').appendChild(eraser);
		var butcolor = document.createElement("button");
		butcolor.name = 'gofuckyourself';
		butcolor.className = "jscolor {valueElement:null,value:'ffffff'}";
		butcolor.id = "color";
		butcolor.style.border = "2px solid black";
		butcolor.style.width = '50px';
		butcolor.style.height = '50px';
		butcolor.style.top =  '145px';
		butcolor.style.left = '15px';
		butcolor.style.borderRadius = '8px 8px 8px 8px';
		butcolor.style.cursor = 'pointer';
		butcolor.style.position = 'absolute';
		document.getElementById('using_tools').appendChild(butcolor);
		} else if (request.todo == "desactivateExt"){
			var oldcanvas = document.getElementById('drawing_canvas');
			if (oldcanvas !== null){
				var tools = document.getElementById('using_tools');
				oldcanvas.parentNode.removeChild(oldcanvas);
				tools.parentNode.removeChild(tools);
				// window.location.reload();
			}
		}
		if (request.todo == "actTools"){
			var painting = false,
			    lastX = 0,
			    lastY = 0,
			    lineThickness = 5;
			document.getElementById('using_tools').style.opacity = '1';
			document.getElementById('pencil').onclick = function(){
			var canTool = document.getElementById('defaultCanvas0');
				canTool.style.pointerEvents = 'auto';
				if (document.getElementById('color').name !== "allok")
					document.getElementById('color').name = "allok";

		// 		canTool.onmousedown = function(e) {
		// 			painting = true;
		// 			context.fillStyle = '#' + document.getElementById('color').value;
		// 			lastX = e.pageX - this.offsetLeft;
		// 			lastY = e.pageY - this.offsetTop;
		// 		};
		// 		canTool.onmouseup = function(e){
		// 			painting = false;
		// 		};
		// 		canTool.onmousemove = function(e) {
		// 			if (painting) {
		// 				mouseX = e.pageX - this.offsetLeft;
		// 				mouseY = e.pageY - this.offsetTop;
		// 				var x1 = mouseX,
		// 				    x2 = lastX,
		// 				    y1 = mouseY,
		// 				    y2 = lastY;
		// 				var steep = (Math.abs(y2 - y1) > Math.abs(x2 - x1));
		// 				if (steep){
		// 					var x = x1;
		// 					x1 = y1;
		// 					y1 = x;
		// 					var y = y2;
		// 					y2 = x2;
		// 					x2 = y;
		// 				}
		// 				if (x1 > x2) {
		// 					var x = x1;
		// 					x1 = x2;
		// 					x2 = x;
		// 					var y = y1;
		// 					y1 = y2;
		// 					y2 = y;
		// 				}
		// 				var dx = x2 - x1,
		// 				    dy = Math.abs(y2 - y1),
		// 				    error = 0,
		// 				    de = dy / dx,
		// 				    yStep = -1,
		// 				    y = y1;
		// 				if (y1 < y2) {
		// 					yStep = 1;
		// 				}
		// 				lineThickness = 5 - Math.sqrt((x2 - x1) *(x2-x1) + (y2 - y1) * (y2-y1))/10;
		// 				if(lineThickness < 1){
		// 					lineThickness = 1;   
		// 				}
		// 				for (var x = x1; x < x2; x++) {
		// 					if (steep) {
		// 						context.fillRect(y, x, lineThickness , lineThickness);
		// 					} else {
		// 						context.fillRect(x, y, lineThickness , lineThickness );
		// 					}
		// 					error += de;
		// 					if (error >= 0.5) {
		// 						y += yStep;
		// 						error -= 1.0;
		// 					}
		// 				}
		// 				lastX = mouseX;
		// 				lastY = mouseY;
		// 			}
		// 		};
			};
			document.getElementById('eraser').onclick = function(){
				if (document.getElementById('color').name !== "clearbitch")
					document.getElementById('color').name = "clearbitch";
			};
			document.getElementById('color').onclick = function(){};
		} else if (request.todo == "desTools"){
			var canTool = document.getElementById('drawing_canvas');
			canTool.style.pointerEvents = 'none';
			document.getElementById('using_tools').style.opacity = '0';
		}
});
